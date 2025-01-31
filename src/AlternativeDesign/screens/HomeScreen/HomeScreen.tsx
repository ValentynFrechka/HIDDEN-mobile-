import { TouchableOpacity, View, Text, Modal, Image } from "react-native";
import homeScreenDimensionStyles from "./styles/screen.dimension.styles";
import { useState } from "react";
import homeScreenModalStyles from "./styles/screen.modal.styles";
import { HomeScreenIcons } from "../../icons/HomeScreenIcons";
import { FitImage } from "../../../components/FitImage/FitImage";
import LinearGradient from "react-native-linear-gradient";
import { BlurryGradient } from "../../../components/BlurryGradient";
import { BlurView } from "expo-blur";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const HomeScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const tabBarHeight = useBottomTabBarHeight();

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
                                <Text style={homeScreenDimensionStyles.statText}>320</Text>
                            </View>
                            
                            <View style={homeScreenDimensionStyles.statSubcontainer}>
                                <HomeScreenIcons.TokenIcon size={homeScreenDimensionStyles.statIcon.height} />
                                <Text style={homeScreenDimensionStyles.statText}>240</Text>
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
                                <Text style={homeScreenModalStyles.dataText}>180</Text>
                            </View>

                            <View style={homeScreenModalStyles.dataContainerRow}>
                                <Text style={homeScreenModalStyles.dataLabel}>Other service information</Text>
                            </View>
                        </View>
                    
                </View>
            </View>
        </Modal>
        </>
    );
}

export default HomeScreen;