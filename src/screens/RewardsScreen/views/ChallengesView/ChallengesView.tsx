import { View, Text, ScrollView } from "react-native"
import challengesViewStyles from "./styles/challengesView.styles"
import { EWeekDay } from "./components/StreakBar/enum/EWeekDay";
import StreakBar from "./components/StreakBar/StreakBar";
import { challengesDataMock } from "./mocks/challengesDataMock";
import Challenge from "./components/Challenge/Challenge";


const ChallengesView = () => {
    const mockedStreak = {today: EWeekDay.thursday, streak: 4, startingFrom: EWeekDay.monday};

    return (
        <View style={challengesViewStyles.scrollContainer}>
            <ScrollView>
                <View style={challengesViewStyles.container}>
                    <View style={challengesViewStyles.streakInfoContainer}>
                        <View style={challengesViewStyles.yourStreakContainer}>
                            <View style={challengesViewStyles.fireIcon}>

                            </View>

                            <Text style={challengesViewStyles.yourStreakText}>Your daily streak:</Text>
                        </View>

                        <Text style={challengesViewStyles.yourStreakText}>{mockedStreak.streak}/7</Text>
                    </View>
                    
                    <StreakBar 
                        today={mockedStreak.today} 
                        streak={mockedStreak.streak} 
                        startingFrom={mockedStreak.startingFrom} 
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