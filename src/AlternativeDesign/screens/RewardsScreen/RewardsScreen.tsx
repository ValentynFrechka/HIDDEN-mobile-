import { View } from "react-native"
import LeaderboardView from "./views/LeaderboardView/LeaderboardView";
import { ERewardsView } from "./enum/ERewardsView";
import rewardsScreenDimensionStyles from "./styles/rewardsScreen.dimension.styles";
import RewardsView from "./views/RewardsView/RewardsView";
import ChallengesView from "./views/ChallengesView/ChallengesView";
import TabbedView from "../../../components/TabbedView/TabbedView";
import { EViewContext } from "../../../enum/EViewContext";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


const RewardsScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={[rewardsScreenDimensionStyles.container, {marginBottom: tabBarHeight}]}>
            <TabbedView 
                context={EViewContext.rewards}
                fontColor="white" 
                views={{
                    [ERewardsView.rewards]: RewardsView,
                    [ERewardsView.challenges]: ChallengesView,
                    [ERewardsView.leaderboard]: LeaderboardView,
                }} 
                initialView={ERewardsView.rewards}
                rerenderViews={true}
            />
        </View>
    );
};

export default RewardsScreen;