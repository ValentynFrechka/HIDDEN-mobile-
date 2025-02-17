import contract from "../../misc/ILeafERC1155Token.json";

export const CONTRACT = {
    RPC_URL: process.env.EXPO_PUBLIC_RPC_URL,
    ADDRESS: process.env.EXPO_PUBLIC_CONTRACT_ADDRESS,
    ABI: contract.abi,
}