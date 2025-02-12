import "react-native-get-random-values";
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
    private constructor(){};
    public static instance = new EthKeyService();

    public async generateKeys(callback: (keys: KeyPair) => void) {
        const wallet = Wallet.createRandom();
        const keyPair: KeyPair = {
            privateKey: wallet.privateKey,
            publicKey: wallet.publicKey,
            address: wallet.address,
        };

        callback(keyPair);
    }

    public async saveKeysToFile(keyPair: KeyPair) {
        try {
            await this.ensureFileExists();
            await RNFS.writeFile(FILE_PATH, JSON.stringify(keyPair, null, 2), "utf8");
        } catch (error) {
            console.error("Error saving keys:", error);
            throw error;
        }
    }

    public async loadKeys(callback: (keys: KeyPair) => void) {
        try {
            if (!(await RNFS.exists(FILE_PATH))) {
                console.warn("Keys file does not exist.");
                return null;
            }
            const data = await RNFS.readFile(FILE_PATH, "utf8");
            callback(JSON.parse(data));
        } catch (error) {
            console.error("Error loading keys:", error);
            return null;
        }
    }

    private async ensureFileExists() {
        try {
            const exists = await RNFS.exists(FILE_PATH);
            if (!exists) {
                await RNFS.writeFile(FILE_PATH, "{}", "utf8");
            }
        } catch (error) {
            console.error("Error ensuring file exists:", error);
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

export default EthKeyService;