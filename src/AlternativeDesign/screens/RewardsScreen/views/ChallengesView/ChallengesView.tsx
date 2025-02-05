import { View, Text, ScrollView } from "react-native"
import challengesViewStyles from "./styles/challengesView.styles"
import { EWeekDay } from "./components/StreakBar/enum/EWeekDay";
import StreakBar from "./components/StreakBar/StreakBar";
import { challengesDataMock } from "./mocks/challengesDataMock";
import Challenge from "./components/Challenge/Challenge";
import { RewardsScreenIcons } from "../../../../icons/RewardsScreenIcons";


const ChallengesView = () => {
    const streakMock = 4;

    return (
        <View style={challengesViewStyles.scrollContainer}>
            <ScrollView>
                <View style={challengesViewStyles.container}>
                    <View style={challengesViewStyles.streakInfoContainer}>
                        <View style={challengesViewStyles.yourStreakContainer}>
                            <Text style={challengesViewStyles.yourStreakText}>Your daily streak:</Text>
                        </View>

                        <Text style={challengesViewStyles.yourStreakText}>{streakMock}/7</Text>
                    </View>
                    
                    <StreakBar 
                        streak={streakMock}
                    />

                    <View style={challengesViewStyles.challengesList}>
                        <View style={challengesViewStyles.challengesContainer}>
                            <Text style={challengesViewStyles.challengesTitle}>Daily challenges</Text>
                            <View style={challengesViewStyles.challengesSubcontainer}>
                                {challengesDataMock.daily.map((challenge, index) => (
                                    <Challenge 
                                        key={index}
                                        text={challenge.text}
                                        progress={challenge.progress}
                                        reward={challenge.reward}
                                    />
                                ))}
                            </View>
                        </View>

                        <View style={challengesViewStyles.challengesContainer}>
                            <Text style={challengesViewStyles.challengesTitle}>Weekly challenges</Text>
                            <View style={challengesViewStyles.challengesSubcontainer}>
                                {challengesDataMock.weekly.map((challenge, index) => (
                                    <Challenge 
                                        key={index}
                                        text={challenge.text}
                                        progress={challenge.progress}
                                        reward={challenge.reward}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default ChallengesView;