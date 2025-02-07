import "react-native-get-random-values";
import { Wallet } from "ethers";
import RNFS from "react-native-fs";

const FILE_NAME = "keys.json";
const FILE_PATH = `${RNFS.DocumentDirectoryPath}/${FILE_NAME}`;

export interface KeyPair {
  privateKey: string;
  publicKey: string;
  address: string;
}

class EthKeyService {
  static async generateAndSaveKeys(): Promise<KeyPair> {
    try {
        const wallet = Wallet.createRandom();
        const keyPair: KeyPair = {
            privateKey: wallet.privateKey,
            publicKey: wallet.publicKey,
            address: wallet.address,
        };

        await EthKeyService.ensureFileExists();
        await RNFS.writeFile(FILE_PATH, JSON.stringify(keyPair, null, 2), "utf8");

        return keyPair;
    } catch (error) {
        console.error("Error generating keys:", error);
        throw error;
    }
  }

  static async loadKeys(): Promise<KeyPair | null> {
    try {
        if (!(await RNFS.exists(FILE_PATH))) {
            console.warn("Keys file does not exist.");
            return null;
        }
        const data = await RNFS.readFile(FILE_PATH, "utf8");
        return JSON.parse(data);
        } catch (error) {
            console.error("Error loading keys:", error);
            return null;
        }
  }

    private static async ensureFileExists() {
        try {
            const exists = await RNFS.exists(FILE_PATH);
            if (!exists) {
                await RNFS.writeFile(FILE_PATH, "{}", "utf8");
            }
        } catch (error) {
            console.error("Error ensuring file exists:", error);
        }
    }
}

export default EthKeyService;