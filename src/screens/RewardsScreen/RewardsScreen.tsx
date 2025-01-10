import { View } from "react-native"
import LeaderboardView from "./views/LeaderboardView";
import TopBar from "./components/TopBar";
import { RewardsViewContext, RewardsViewContextType } from "./contexts/RewardsViewContext";
import { ERewardsView } from "./enum/ERewardsView";
import { useState } from "react";
import dimensionStyles from "./styles/screen.dimension.styles";
import RewardsView from "./views/RewardsView";
import ChallengesView from "./views/ChallengesView";


const RewardsScreen = () => {
    const [rewardsView, setRewardsView] = useState<ERewardsView>(ERewardsView.leaderboard);

    const rewardsViewContextValues: RewardsViewContextType = {
        rewardsView: rewardsView,
        setRewardsView: setRewardsView
    }

    const renderCurrentView = () => {
        switch (rewardsView) {
            case ERewardsView.rewards:
                return <RewardsView />;
            case ERewardsView.challenges:
                return <ChallengesView />;
            case ERewardsView.leaderboard:
                return <LeaderboardView />;
        }
    }

    return (
        <RewardsViewContext.Provider value={rewardsViewContextValues}>
            <View style={dimensionStyles.container}>
                <TopBar style={dimensionStyles.topBar}/>

                {renderCurrentView()}
            </View>
        </RewardsViewContext.Provider>
    )
};

export default RewardsScreen;