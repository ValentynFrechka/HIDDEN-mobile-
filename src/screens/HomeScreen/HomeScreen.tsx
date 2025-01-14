import { TouchableOpacity, View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import homeScreenDimensionStyles from "./styles/screen.dimension.styles";
import { useState } from "react";
import homeScreenModalStyles from "./styles/screen.modal.styles";

const HomeScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <>
        <View style={homeScreenDimensionStyles.verticalContainer}>
            <TouchableOpacity
                style={homeScreenDimensionStyles.treeImageContainer}
                onPress={() => setModalVisible(true)}
            />
            <View style={homeScreenDimensionStyles.statContainer}>
                <View style={homeScreenDimensionStyles.statSubcontainer}>
                    <View style={homeScreenDimensionStyles.statIcon}></View>
                    <Text style={homeScreenDimensionStyles.statText}>320</Text>
                </View>
                
                <View style={homeScreenDimensionStyles.statSubcontainer}>
                    <View style={homeScreenDimensionStyles.statIcon}></View>
                    <Text style={homeScreenDimensionStyles.statText}>240</Text>
                </View>
            </View>

            <View style={homeScreenDimensionStyles.actionContainer}>
                <TouchableOpacity style={homeScreenDimensionStyles.actionSubcontainer}>
                    <View style={homeScreenDimensionStyles.actionIcon}></View>
                    <Text>Water my tree</Text>
                </TouchableOpacity>

                <TouchableOpacity style={homeScreenDimensionStyles.actionSubcontainer}>
                    <View style={homeScreenDimensionStyles.actionIcon}></View>
                    <Text>Feed my tree</Text>
                </TouchableOpacity>

                <TouchableOpacity style={homeScreenDimensionStyles.actionSubcontainer}>
                    <View style={homeScreenDimensionStyles.actionIcon}></View>
                    <Text>Care for my tree</Text>
                </TouchableOpacity>
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
                        />
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