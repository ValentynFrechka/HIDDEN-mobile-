import { ethers, Wallet } from "ethers";
import useEthWalletService from "./EthWalletService";
import { CONTRACT } from "../src/constants/blockchain";

const ethWalletService = useEthWalletService();

class ContractInteractionService {
    static instance: ContractInteractionService = new ContractInteractionService();

    private provider: ethers.JsonRpcProvider;
    private contract: ethers.Contract | null = null;
    private signer: Wallet | null = null;

    private constructor() {
        this.provider = new ethers.JsonRpcProvider(CONTRACT.RPC_URL);
    }

    private async initContract() {
        const wallet = await ethWalletService.getWallet();
        if (!wallet) {
            console.error("Wallet not found. Please create or import a wallet first.");
            return;
        }
        if (CONTRACT.ADDRESS === undefined) {
            throw new Error("No contract address provided by environment.");
        }
        if (CONTRACT.ABI === undefined) {
            throw new Error("No contract abi provided by environment.");
        }

        this.signer = wallet.connect(this.provider);
        this.contract = new ethers.Contract(CONTRACT.ADDRESS, CONTRACT.ABI, this.signer);
    }

    private async ensureContractExists(): Promise<any> {
        if (!this.contract) await this.initContract();
    }

    public async getBalances(tokenID: number): Promise<bigint | null> {
        await this.ensureContractExists();

        try {
            const balance = await this.contract?.balanceOf("0x32f456f44B8073cED0780f157E93A8c09c7EA6d8", 0);
            return balance;
        }
        catch (error) {
            console.error("Error fetching balance:", error);
            return null;
        }

        //return await this.contract?.balanceOf(this.signer?.address, tokenID);
    }
}

const useContractInteractionService = () => {
    return ContractInteractionService.instance;
}

export default useContractInteractionService;