import { ethers, Wallet } from "ethers";
import useEthWalletService from "./EthWalletService";
import { ERC1155, ERC20 } from "../src/constants/blockchain";

const ethWalletService = useEthWalletService();

class ContractInteractionService {
    static instance: ContractInteractionService = new ContractInteractionService();

    private erc1155Provider: ethers.JsonRpcProvider;
    private erc20Provider: ethers.JsonRpcProvider;
    private erc1155: ethers.Contract | null = null;
    private erc20: ethers.Contract | null = null;

    private erc1155Signer: Wallet | null = null;
    private erc20Signer: Wallet | null = null;

    private burnLeafListeners: Map<string, ((user: string, treeID: bigint, tokensEarned: bigint) => void)[]> = new Map();

    private constructor() {
        this.erc1155Provider = new ethers.JsonRpcProvider(ERC1155.RPC_URL);
        this.erc20Provider = new ethers.JsonRpcProvider(ERC20.RPC_URL);
    }

    private async initContracts() {
        const wallet = await ethWalletService.getWallet();
        if (!wallet) {
            console.error("Wallet not found. Please create or import a wallet first.");
            return;
        }
        if (ERC1155.ADDRESS === undefined) {
            throw new Error("No ERC1155 contract address provided by environment.");
        }
        if (ERC20.ADDRESS === undefined) {
            throw new Error("No ERC20 contract address provided by environment.");
        }
        if (ERC1155.ABI === undefined) {
            throw new Error("No ERC1155 contract abi provided by environment.");
        }
        if (ERC20.ABI === undefined) {
            throw new Error("No ERC20 contract abi provided by environment.");
        }

        this.erc1155Signer = wallet.connect(this.erc1155Provider);
        this.erc20Signer = wallet.connect(this.erc20Provider);
        this.erc1155 = new ethers.Contract(ERC1155.ADDRESS, ERC1155.ABI, this.erc1155Signer);
        this.erc20 = new ethers.Contract(ERC20.ADDRESS, ERC20.ABI, this.erc20Signer);

        this.subscribeToEvents();
    }

    private async ensureContractsExist(): Promise<any> {
        if (!this.erc1155 || !this.erc20) await this.initContracts();
    }

    public async getTreeIDs(userAddress: string): Promise<number[] | null> {
        await this.ensureContractsExist();

        try {
            return await this.erc1155?.treeIDs(userAddress);
        } catch (error) {
            console.error("Error fetching tree IDs:", error);
            return null;
        }
    }

    public async getLeafBalance(userAddress: string, treeID: number): Promise<bigint | null> {
        await this.ensureContractsExist();

        try {
            return await this.erc1155?.leafBalance(userAddress, treeID);
        } catch (error) {
            console.log("Error fetching leaf balance:", error);
            return null;
        }
    }

    public async getTokenBalance(userAddress: string): Promise<bigint | null> {
        await this.ensureContractsExist();

        try {
            return await this.erc20?.balanceOf(userAddress);
        } catch (error) {
            console.log("Error fetching token balance:", error);
            return null;
        }
    }

    private async subscribeToEvents() {
        if (!this.erc1155) return;

        this.erc1155.on("BurnLeaf", (user: string, treeID: bigint, tokensEarned: bigint) => {
            if (this.burnLeafListeners.has(user)) {
                this.burnLeafListeners.get(user)?.forEach(listener => listener(user, treeID, tokensEarned));
            }
        });
    }

    public onBurnLeaf(user: string, callback: (user: string, treeID: bigint, tokensEarned: bigint) => void) {
        if (!this.burnLeafListeners.has(user)) {
            this.burnLeafListeners.set(user, []);
        }
        this.burnLeafListeners.get(user)?.push(callback);
    }

    public offBurnLeaf(user: string, callback: (user: string, treeID: bigint, tokensEarned: bigint) => void) {
        if (this.burnLeafListeners.has(user)) {
            this.burnLeafListeners.set(
                user,
                this.burnLeafListeners.get(user)?.filter(listener => listener !== callback) || []
            );

            if (this.burnLeafListeners.get(user)?.length === 0) {
                this.burnLeafListeners.delete(user);
            }
        }
    }
}

const useContractInteractionService = () => {
    return ContractInteractionService.instance;
}

export default useContractInteractionService;