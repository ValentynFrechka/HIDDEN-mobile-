import { View, Text, ScrollView } from "react-native";
import skinsViewStyles from "./styles/skinsView.styles";
import { TreeSkinsDataProvider } from "../../providers/TreeSkinsDataProvider";
import TreeSkinBlock from "../../components/TreeSkinBlock/TreeSkinBlock";
import { ShopScreenIcons } from "../../../../icons/ShopScreenIcons";
import UserBalanceInfo from "../../../../components/UserBalanceInfo/UserBalanceInfo";
import { ECurrency } from "../../../../components/UserBalanceInfo/enum/ECurrency";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import useEthWalletService from "../../../../../../services/EthWalletService";
import useContractInteractionService from "../../../../../../services/ContractInteractionService";
import { Wallet } from "ethers";

const SkinsView = () => {
    const skinsDataProvider = TreeSkinsDataProvider.instance;
    const walletService = useEthWalletService();
    const contractService = useContractInteractionService();

    const [balance, setBalance] = useState(BigInt(0));

    useFocusEffect(
        useCallback(() => {
            const updateBalances = async () => {
                const wallet = await walletService.getWallet();
                if (wallet) {
                    getBalances(wallet);
                }
            };

            const subscribeToEvents = async () => {
                const wallet = await walletService.getWallet();
                if (wallet) {
                    const burnLeafListener = (user: string, treeID: bigint, tokensEarned: bigint) => {
                        if (user.toLowerCase() === wallet.address.toLowerCase()) {
                            getBalances(wallet);
                        }
                    };

                    contractService.onBurnLeaf(wallet.address, burnLeafListener);
                }
            }

            const unsubscribeFromEvents = async () => {
                const wallet = await walletService.getWallet();
                if (wallet) {
                    const burnLeafListener = (user: string, treeID: bigint, tokensEarned: bigint) => {
                        if (user.toLowerCase() === wallet.address.toLowerCase()) {
                            getBalances(wallet);
                        }
                    };

                    contractService.offBurnLeaf(wallet.address, burnLeafListener);
                }
            }

            updateBalances();

            subscribeToEvents();

            return () => {
                setBalance(BigInt(0));
                unsubscribeFromEvents();
            };
        }, [])
    );
    

    const getBalances = async (wallet: Wallet) => {
        contractService.getTokenBalance(wallet.address).then(tokens => {
            if (!tokens) return;
            setBalance(tokens);
        })
    }

    return (
        <View style={skinsViewStyles.scrollContainer}>
            <ScrollView>
                <View style={skinsViewStyles.container}>
                    <View style={skinsViewStyles.twoColumnContainer}>
                        {skinsDataProvider.shopSkinsMock.map((skin, index) => (
                            <TreeSkinBlock 
                                key={index}
                                name={skin.name}
                                imageSrc={ShopScreenIcons.treeExampleImageSrc}
                                price={skin.price}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            
            <UserBalanceInfo balance={balance} currency={ECurrency.leafs} style={skinsViewStyles.yourBalanceContainer} /> 
        </View>
    )
};

export default SkinsView;