import { TouchableOpacity, View } from "react-native";
import rewardCircleStyles from "./styles/rewardCircle.styles";
import { Reward } from "../../types/Reward";

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
            <View style={[
                rewardCircleStyles.icon,
                {width: size / 2, height: size / 2}
            ]}>

            </View>
        </TouchableOpacity>
    );
}

export default RewardCircle;