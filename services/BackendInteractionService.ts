import axios from "axios";
import useEthKeyService from "./EthKeyService";

const ethKeyService = useEthKeyService();

class BackendInteractionService {
    static instance: BackendInteractionService = new BackendInteractionService();
    private constructor() {}

    private backendAddress = process.env.EXPO_PUBLIC_BACKEND_ADDRESS;

    public async createUser(name: string, email: string, deviceId: string, address: string): Promise<any> {
        try {
            const userData = {
                name,
                email,
                deviceId,
                publicKey: address,
            };

            const response = await axios.post(`${this.backendAddress}/api/v1/users`, userData);
            return response.data;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    public async removeUserByAddress(address: string): Promise<void> {
        try {
            await axios.delete(`${this.backendAddress}/api/v1/users/byAddress/${address}`);
        } catch (error) {
            console.error("Error removing user:", error);
            throw error;
        }
    }
}

const useBackendInteractionService = () => {
    return BackendInteractionService.instance;
};

export default useBackendInteractionService;