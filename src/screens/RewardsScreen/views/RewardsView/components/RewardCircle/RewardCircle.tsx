import { TouchableOpacity, View } from "react-native";
import rewardCircleStyles from "./styles/rewardCircle.styles";
import { Reward } from "../../types/Reward";
import { BlurryGradient } from "../../../../../../components/BlurryGradient";

type RewardCircleProps = {
    size: number;
    reward: Reward;
    onCirclePress: (reward: Reward) => void;
}

const RewardCircle: React.FC<RewardCircleProps> = ({ size, reward, onCirclePress }) => {

    const onRewardPress = () => {
        onCirclePress(reward);
    }

    return (
        <TouchableOpacity 
            onPress={onRewardPress}
            style={[
                rewardCircleStyles.circle, 
                {width: size, height: size, borderRadius: size / 2}
            ]}
        >
            <BlurryGradient style={[
                rewardCircleStyles.circle,
                {width: size, height: size, borderRadius: size / 2}
            ]}>
            <View style={[
                rewardCircleStyles.icon,
                {width: size / 2, height: size / 2}
            ]}>
                <reward.icon width={"100%"} height={"100%"}/>
            </View>
            </BlurryGradient>
        </TouchableOpacity>
    );
}

export default RewardCircle;