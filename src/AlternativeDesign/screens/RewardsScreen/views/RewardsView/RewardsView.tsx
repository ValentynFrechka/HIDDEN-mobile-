import { View, Text, Dimensions, PanResponder, Modal, TouchableOpacity } from "react-native"
import rewardsViewStyles from "./styles/rewardsView.styles"
import { Reward } from "./types/Reward";
import { Position } from "./types/Position";
import RewardCircle from "./components/RewardCircle/RewardCircle";
import { rewardsMock } from "./mock/rewardsMock";
import { useEffect, useState } from "react";
import { calculatePositions } from "./util/circlePositioningUtil";
import rewardsModalStyle from "./styles/rewardsModal.style";
import { RewardsScreenIcons } from "../../../../icons/RewardsScreenIcons";
import { BlurView } from "expo-blur";
import PrimaryButton from "../../../../components/buttons/PrimaryButton/PrimaryButton";

const screenDims = Dimensions.get("screen");

const RewardsView = () => {
    const minDistance = 30;
    const rewards = rewardsMock;

    const centerX = screenDims.width / 2;
    const centerY = screenDims.height / 4;

    const [positions, setPositions] = useState<Position[]>(calculatePositions(rewards, minDistance, centerX, centerY).positions);
    const [dimensions, setDimensions] = useState({ width: 200, height: 200 });

    useEffect(() => {
        const { positions, width, height } = calculatePositions(
            rewards,
            minDistance,
            centerX,
            centerY
        );
        setPositions(positions);
        setDimensions({ width, height });
    }, [rewards, minDistance]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (e, gestureState) => {
            const {dx, dy} = gestureState;
            const touchThreshold = 3;

            return Math.abs(dx) > touchThreshold || Math.abs(dy) > touchThreshold;
        },
        onPanResponderMove: (e, gestureState) => {
            const { dx, dy } = gestureState;

            setDimensions((prevState) => ({
                width: prevState.width + dx,
                height: prevState.height + dy,
            }));

            positions.forEach((pos) => {
                pos.x += dx;
                pos.y += dy;
            })
        },
        onPanResponderRelease: () => {

        }
    });

    const [selectedReward, setSelectedReward] = useState<Reward | undefined>(undefined);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleCirclePress = (reward: Reward) => {
        setSelectedReward(reward);
        setModalVisible(true);
    }

    return (
        <>
        <View 
            {...panResponder.panHandlers}
            style={[
                rewardsViewStyles.container, 
                {width: dimensions.width, height: dimensions.height, overflow: "hidden"}
            ]}>
            {rewards.map((reward, index) => (
                <View
                    key={index}
                    style={{
                        position: "absolute",
                        left: positions[index].x,
                        top: positions[index].y,
                    }}
                >
                    <RewardCircle size={reward.size} reward={reward} onCirclePress={handleCirclePress}/>
                </View>
            ))}
        </View>

        {selectedReward && (
            <Modal
                visible={isModalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={rewardsModalStyle.overlay}>
                    <View style={rewardsModalStyle.window}>
                        <View style={rewardsModalStyle.verticalContainer}>
                            <selectedReward.icon size={rewardsModalStyle.icon.height}/>

                            <View style={rewardsModalStyle.textContainer}>
                                <Text style={rewardsModalStyle.title}>{selectedReward.title}</Text>

                                <Text style={rewardsModalStyle.description}>{selectedReward.description}</Text>
                            </View>

                            <PrimaryButton style={rewardsModalStyle.shareButton}>
                                <View style={rewardsModalStyle.shareSubcontainer}>
                                    <Text style={rewardsModalStyle.shareText}>Share</Text>

                                    <RewardsScreenIcons.ShareIcon size={rewardsModalStyle.shareIcon.height} />
                                </View>
                            </PrimaryButton>
                        </View>

                        <View style={rewardsModalStyle.closeButtonContainer}>
                            <TouchableOpacity
                                style={rewardsModalStyle.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <RewardsScreenIcons.CrossIcon size={rewardsModalStyle.closeButton.height}/>
                                
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )}
        </>
    )
};

export default RewardsView;