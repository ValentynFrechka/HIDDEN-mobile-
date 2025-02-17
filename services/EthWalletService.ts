import { ethers, Wallet } from "ethers";
import useEthKeyService, { KeyPair } from "./EthKeyService";

const ethKeyService = useEthKeyService();

class EthWalletService {
    static instance: EthWalletService = new EthWalletService();
    private constructor(){}

    public async getWallet(): Promise<Wallet | null> {
        return ethKeyService.loadKeys()
            .then(keys => {
                if (!keys) return null;
                return new Wallet(keys.privateKey);
            })
            .catch(err => {
                console.error(err);
                return null;
            });
    }
}

const useEthWalletService = () => {
    return EthWalletService.instance;
}

export default useEthWalletService;