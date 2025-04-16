import { View, Text, ImageSourcePropType } from "react-native";
import FertilizersShopRow from "../../components/FertilizersShopRow/FertilizersShopRow";
import { FertilizersDataProvider } from "../../providers/FertilizersDataProvider";
import { useCallback, useState } from "react";
import FertilizerStatusBlock from "../../components/FertilizerStatusBlock/FertilizerStatusBlock";
import fertilizersViewStyles from "./styles/fertilizersView.styles";
import { ShopScreenIcons } from "../../../../icons/ShopScreenIcons";
import UserBalanceInfo from "../../../../components/UserBalanceInfo/UserBalanceInfo";
import { ECurrency } from "../../../../components/UserBalanceInfo/enum/ECurrency";
import { useFocusEffect } from "@react-navigation/native";
import useEthWalletService from "../../../../../../services/EthWalletService";
import useContractInteractionService from "../../../../../../services/ContractInteractionService";
import { Wallet } from "ethers";

type FertilizerStat = {
    [name: string]: {
        iconSrc: ImageSourcePropType;
        amount: number;
    };
};

const FertilizersView = () => {
    const fertilizersDataProvider = FertilizersDataProvider.instance;
    const walletService = useEthWalletService();
    const contractService = useContractInteractionService();

    const [balance, setBalance] = useState(BigInt(0));

    const getFertilizerAmountStat = (name: string) => {
        return 0;
    }

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

    const [fertilizerStats, setFertilizerStats] = useState<FertilizerStat>(
        fertilizersDataProvider.fertilizers.reduce ((acc, fertilizer) => {
            acc[fertilizer.name] = {
                iconSrc: fertilizer.iconSrc,
                amount: getFertilizerAmountStat(fertilizer.name)
            };
            return acc;
        }, {} as FertilizerStat)
    );
    
    return (
        <View style={fertilizersViewStyles.container}>
            <View style={fertilizersViewStyles.spacedVerticalContainer}>
                <View style={fertilizersViewStyles.buyingContainer}>
                    <View style={fertilizersViewStyles.fertilizersListContainer}>
                        {fertilizersDataProvider.fertilizers.map((fertilizer) => (
                            <FertilizersShopRow
                                key={fertilizer.name} 
                                iconSrc={fertilizer.iconSrc} 
                                name={fertilizer.name} 
                                description={(fertilizer.description ? fertilizer.description : undefined)}
                                price={fertilizer.price}                        
                            />
                        ))}
                    </View>
                    
                    <UserBalanceInfo balance={balance} currency={ECurrency.leafs} style={fertilizersViewStyles.yourBalanceContainer}/>
                </View>

                <View style={fertilizersViewStyles.statusView}>
                    {Object.keys(fertilizerStats).map((key) => (
                        <FertilizerStatusBlock
                            key={key} 
                            iconSrc={fertilizerStats[key].iconSrc}
                            amount={fertilizerStats[key].amount}                       
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default FertilizersView;