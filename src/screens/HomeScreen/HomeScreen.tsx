import { TouchableOpacity, View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import dimensionStyles from "./styles/dimension.styles";
import { useState } from "react";
import modalStyles from "./styles/modal.styles";

const HomeScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <>
        <View style={dimensionStyles.verticalContainer}>
            <TouchableOpacity
                style={dimensionStyles.treeImageContainer}
                onPress={() => setModalVisible(true)}
            />
            <View style={dimensionStyles.statContainer}>
                <View style={dimensionStyles.statSubcontainer}>
                    <View style={dimensionStyles.statIcon}></View>
                    <Text style={dimensionStyles.statText}>320</Text>
                </View>
                
                <View style={dimensionStyles.statSubcontainer}>
                    <View style={dimensionStyles.statIcon}></View>
                    <Text style={dimensionStyles.statText}>240</Text>
                </View>
            </View>

            <View style={dimensionStyles.actionContainer}>
                <TouchableOpacity style={dimensionStyles.actionSubcontainer}>
                    <View style={dimensionStyles.actionIcon}></View>
                    <Text>Water my tree</Text>
                </TouchableOpacity>

                <TouchableOpacity style={dimensionStyles.actionSubcontainer}>
                    <View style={dimensionStyles.actionIcon}></View>
                    <Text>Feed my tree</Text>
                </TouchableOpacity>

                <TouchableOpacity style={dimensionStyles.actionSubcontainer}>
                    <View style={dimensionStyles.actionIcon}></View>
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
            <View style={modalStyles.overlay}>
                <View style={modalStyles.window}>
                    <View style={modalStyles.closeButtonContainer}>
                        <TouchableOpacity 
                            style={modalStyles.closeButton} 
                            onPress={() => setModalVisible(false)}
                        />
                    </View>

                    <Text style={modalStyles.title}>Tree information</Text>

                    <View style={modalStyles.dataContainer}>
                        <View style={modalStyles.dataContainerRow}>
                            <Text style={modalStyles.dataLabel}>NFT Contract Address</Text>
                            <Text style={modalStyles.dataText}>5dje8b6joen97sw8en3he3jo</Text>
                        </View>

                        <View style={modalStyles.dataContainerRow}>
                            <Text style={modalStyles.dataLabel}>Leaves left</Text>
                            <Text style={modalStyles.dataText}>180</Text>
                        </View>

                        <View style={modalStyles.dataContainerRow}>
                            <Text style={modalStyles.dataLabel}>Other service information</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
        </>
    );
}

export default HomeScreen;