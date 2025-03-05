import { TouchableOpacity, View, Text, Modal, Image } from "react-native";
import homeScreenDimensionStyles from "./styles/screen.dimension.styles";
import { useCallback, useEffect, useState } from "react";
import homeScreenModalStyles from "./styles/screen.modal.styles";
import { HomeScreenIcons } from "../../icons/HomeScreenIcons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import useContractInteractionService from "../../../../services/ContractInteractionService";
import useEthWalletService from "../../../../services/EthWalletService";
import { Wallet } from "ethers";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const tabBarHeight = useBottomTabBarHeight();

    const [leafAmount, setLeafAmount] = useState(BigInt(0));
    const [tokenAmount, setTokenAmount] = useState(BigInt(0));

    const walletService = useEthWalletService();
    const contractService = useContractInteractionService();

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
                setLeafAmount(BigInt(0));
                setTokenAmount(BigInt(0));
                unsubscribeFromEvents();
            };
        }, [])
    );

    const getBalances = async (wallet: Wallet) => {
        contractService.getLeafBalance(wallet.address, 0).then(leafs => {
            if (!leafs) return;
            setLeafAmount(leafs);
        })
        contractService.getTokenBalance(wallet.address).then(tokens => {
            if (!tokens) return;
            setTokenAmount(tokens);
        })
    }

    return (
        <>
        <View style={[homeScreenDimensionStyles.container, {marginBottom: tabBarHeight}]}>
            <TouchableOpacity
                style={homeScreenDimensionStyles.treeImageContainer}
                onPress={() => setModalVisible(true)}
            >
                <Image style={{height: "100%"}} source={require("../../../../assets/tree-image-example.png")}></Image>

            </TouchableOpacity>

            <View style={homeScreenDimensionStyles.verticalContainer}>
                        <View style={homeScreenDimensionStyles.statsContainer}>
                            <View style={homeScreenDimensionStyles.statSubcontainer}>
                                <HomeScreenIcons.LeafIcon size={homeScreenDimensionStyles.statIcon.height} />
                                <Text style={homeScreenDimensionStyles.statText}>{leafAmount.toString()}</Text>
                            </View>
                            
                            <View style={homeScreenDimensionStyles.statSubcontainer}>
                                <HomeScreenIcons.TokenIcon size={homeScreenDimensionStyles.statIcon.height} />
                                <Text style={homeScreenDimensionStyles.statText}>{tokenAmount.toString()}</Text>
                            </View>
                        </View>

                <View style={homeScreenDimensionStyles.actionsContainer}>
                    <View style={homeScreenDimensionStyles.actionButtonContainer}>
                        <TouchableOpacity style={homeScreenDimensionStyles.actionButton}>
                            <HomeScreenIcons.WaterActionIcon size={homeScreenDimensionStyles.actionIcon.height} />
                            <Text style={homeScreenDimensionStyles.actionText}>Water my tree</Text>
                        </TouchableOpacity>

                        <View style={homeScreenDimensionStyles.actionButtonShadow} />
                    </View>

                    <View style={homeScreenDimensionStyles.actionButtonContainer}>
                        <TouchableOpacity style={homeScreenDimensionStyles.actionButton}>
                            <HomeScreenIcons.FeedActionIcon size={homeScreenDimensionStyles.actionIcon.height} />
                            <Text style={homeScreenDimensionStyles.actionText}>Feed my tree</Text>
                        </TouchableOpacity>

                        <View style={homeScreenDimensionStyles.actionButtonShadow} />
                    </View>

                    <View style={homeScreenDimensionStyles.actionButtonContainer}>
                        <TouchableOpacity style={homeScreenDimensionStyles.actionButton}>
                            <HomeScreenIcons.CareActionIcon size={homeScreenDimensionStyles.actionIcon.height} />
                            <Text style={homeScreenDimensionStyles.actionText}>Care for my tree</Text>
                        </TouchableOpacity>

                        <View style={homeScreenDimensionStyles.actionButtonShadow} />
                    </View>
                </View>
            </View>
        </View>

        <Modal
            animationType="fade"
            transparent
            visible={isModalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            
            <View style={homeScreenModalStyles.overlay}>
                <View style={homeScreenModalStyles.window}>
                        <View style={homeScreenModalStyles.closeButtonContainer}>
                            <TouchableOpacity 
                                style={homeScreenModalStyles.closeButton} 
                                onPress={() => setModalVisible(false)}
                            >
                                <HomeScreenIcons.CrossIcon size={homeScreenModalStyles.closeButton.height} color="black" />
                            </TouchableOpacity>
                        </View>

                        <Text style={homeScreenModalStyles.title}>Tree information</Text>

                        <View style={homeScreenModalStyles.dataContainer}>
                            <View style={homeScreenModalStyles.dataContainerRow}>
                                <Text style={homeScreenModalStyles.dataLabel}>NFT Contract Address</Text>
                                <Text style={homeScreenModalStyles.dataText}>5dje8b6joen97sw8en3he3jo</Text>
                            </View>

                            <View style={homeScreenModalStyles.dataContainerRow}>
                                <Text style={homeScreenModalStyles.dataLabel}>Leaves left</Text>
                                <Text style={homeScreenModalStyles.dataText}>{leafAmount.toString()}</Text>
                            </View>

                            <View style={homeScreenModalStyles.dataContainerRow}>
                                <Text style={homeScreenModalStyles.dataLabel}>Other service information</Text>
                            </View>
                        </View>
                    
                </View>
            </View>
        </Modal>

        <Image 
            source={require("../../../../assets/background/background-image.png")}
            resizeMode="cover"
            style={{position: "absolute", zIndex: -1, opacity: 0.7, alignSelf: "center", height: "100%",}}
        />
        </>
    );
}

export default HomeScreen;