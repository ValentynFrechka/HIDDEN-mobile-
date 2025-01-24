import { TouchableOpacity, View, Text, Modal, Image } from "react-native";
import homeScreenDimensionStyles from "./styles/screen.dimension.styles";
import { useState } from "react";
import homeScreenModalStyles from "./styles/screen.modal.styles";
import { HomeScreenIcons } from "../../icons/HomeScreen.icons";
import { FitImage } from "../../components/FitImage/FitImage";
import LinearGradient from "react-native-linear-gradient";
import { BlurryGradient } from "../../components/BlurryGradient";
import { BlurView } from "expo-blur";

const HomeScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <>
        <View style={homeScreenDimensionStyles.container}>
            <TouchableOpacity
                style={homeScreenDimensionStyles.treeImageContainer}
                onPress={() => setModalVisible(true)}
            >
                <Image style={{height: "100%"}} source={require("../../../assets/tree-image-example.png")}></Image>

            </TouchableOpacity>

            <View style={homeScreenDimensionStyles.verticalContainer}>
                <BlurryGradient style={homeScreenDimensionStyles.statGradient}>
                    <View style={homeScreenDimensionStyles.statVerticalContainer}>
                        <Text style={homeScreenDimensionStyles.statTitle}>Token statistics:</Text>

                        <View style={homeScreenDimensionStyles.statsContainer}>
                            <View style={homeScreenDimensionStyles.statSubcontainer}>
                                <View style={homeScreenDimensionStyles.statIcon}>
                                    <FitImage src={HomeScreenIcons.leafStatIcon} />
                                </View>
                                <Text style={homeScreenDimensionStyles.statText}>320</Text>
                            </View>
                            
                            <View style={homeScreenDimensionStyles.statSubcontainer}>
                                <View style={homeScreenDimensionStyles.statIcon}>
                                    <FitImage src={HomeScreenIcons.tokenStatIcon} />
                                </View>
                                <Text style={homeScreenDimensionStyles.statText}>240</Text>
                            </View>
                        </View>
                    </View>
                </BlurryGradient>

                <View style={homeScreenDimensionStyles.actionContainer}>
                    <TouchableOpacity style={homeScreenDimensionStyles.actionSubcontainer}>
                        <HomeScreenIcons.WaterActionIcon style={homeScreenDimensionStyles.actionIcon} />
                        <Text style={homeScreenDimensionStyles.actionText}>Water my tree</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeScreenDimensionStyles.actionSubcontainer}>
                        <HomeScreenIcons.FeedActionIcon style={homeScreenDimensionStyles.actionIcon} />
                        <Text style={homeScreenDimensionStyles.actionText}>Feed my tree</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={homeScreenDimensionStyles.actionSubcontainer}>
                        <HomeScreenIcons.CareActionIcon style={homeScreenDimensionStyles.actionIcon} />
                        <Text style={homeScreenDimensionStyles.actionText}>Care for my tree</Text>
                    </TouchableOpacity>
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
                <BlurView
                    intensity={50}
                    style={homeScreenModalStyles.blur}
                    tint="dark"
                    experimentalBlurMethod="dimezisBlurView"
                >
                    <BlurryGradient style={homeScreenModalStyles.window}
                    >
                        
                            <View style={homeScreenModalStyles.closeButtonContainer}>
                                <TouchableOpacity 
                                    style={homeScreenModalStyles.closeButton} 
                                    onPress={() => setModalVisible(false)}
                                >
                                    <HomeScreenIcons.CrossIcon width={"100%"} height={"100%"} />
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
                        
                    </BlurryGradient>
                </BlurView>
            </View>
        </Modal>
        </>
    );
}

export default HomeScreen;