import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import { useRewardsViewContext } from "../contexts/RewardsViewContext";
import { ERewardsView } from "../enum/ERewardsView";
import dimensionStyles from "../styles/topBar.styles";

type TopBarProps = {
    style?: StyleProp<ViewStyle>
}

const TopBar: React.FC<TopBarProps> = ({ style }) => {
    const { rewardsView, setRewardsView } = useRewardsViewContext();

    const getBorderStyle = (view: ERewardsView) => {
        if (rewardsView === view)
            return dimensionStyles.activeBorder
        else return dimensionStyles.inactiveBorder;
    }

    return (
        <View style={style}>
            <View style={dimensionStyles.barRow}>
                <TouchableOpacity onPress={() => setRewardsView(ERewardsView.rewards)}>
                    <View  style={getBorderStyle(ERewardsView.rewards)}>
                        <Text style={dimensionStyles.text}>Rewards</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setRewardsView(ERewardsView.challenges)}>
                    <View  style={getBorderStyle(ERewardsView.challenges)}>
                        <Text style={dimensionStyles.text}>Challenges</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setRewardsView(ERewardsView.leaderboard)}>
                    <View  style={getBorderStyle(ERewardsView.leaderboard)}>
                        <Text style={dimensionStyles.text}>Leaderboard</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default TopBar;