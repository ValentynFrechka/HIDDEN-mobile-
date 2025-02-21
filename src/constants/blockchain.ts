import erc1155 from "../../misc/ILeafERC1155Token.json";
import erc20 from "../../misc/ILeafERC20Token.json";

export const ERC1155 = {
    RPC_URL: process.env.EXPO_PUBLIC_RPC_URL,
    ADDRESS: process.env.EXPO_PUBLIC_ERC1155_ADDRESS,
    ABI: erc1155.abi,
}

export const ERC20 = {
    RPC_URL: process.env.EXPO_PUBLIC_RPC_URL,
    ADDRESS: process.env.EXPO_PUBLIC_ERC20_ADDRESS,
    ABI: erc20.abi,
}