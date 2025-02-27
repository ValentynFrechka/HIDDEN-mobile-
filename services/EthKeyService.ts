import "react-native-get-random-values";
import * as Keychain from "react-native-keychain";
import { ethers, HDNodeWallet, Wallet } from "ethers";
import RNFS from "react-native-fs";

const FILE_NAME = "keys.json";
const FILE_PATH = `${RNFS.DocumentDirectoryPath}/${FILE_NAME}`;

export interface KeyPair {
  privateKey: string;
  publicKey: string;
  address: string;
}

class EthKeyService {
    static instance: EthKeyService = new EthKeyService();
    private constructor(){}

    public async generateKeys(): Promise<KeyPair | null> {
        const wallet = Wallet.createRandom();
        const keyPair: KeyPair = {
            privateKey: wallet.privateKey,
            publicKey: wallet.publicKey,
            address: wallet.address,
        };

        return keyPair;
    }

    public async saveKeysToFile(keyPair: KeyPair) {
        try {
            const jsonData = JSON.stringify(keyPair);

            await Keychain.setGenericPassword("eth_wallet", jsonData, {
                accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
                storage: Keychain.STORAGE_TYPE.RSA,
            });
        } catch (error) {
            console.error("Error saving keys:", error);
            throw error;
        }
    }

    public async loadKeys(): Promise<KeyPair | null> {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (!credentials) {
                console.warn("No keys found in storage.");
                return null;
            }
            return JSON.parse(credentials.password);
        } catch (error) {
            console.error("Error loading keys:", error);
            return null;
        }
    }

    public isAddressValid(address: string) {
        return ethers.isAddress(address)
    }

    public isPublicKeyValid(publicKey: string) {
        const address = ethers.computeAddress(publicKey);
        return ethers.isAddress(address)
    }

    public isPrivateKeyValid(privateKey: string) {
        try {
            new ethers.Wallet(privateKey);
            return true;
        } catch (error) {
            return false;
        }
    }
}

const useEthKeyService = () => {
    return EthKeyService.instance;
}

export default useEthKeyService;