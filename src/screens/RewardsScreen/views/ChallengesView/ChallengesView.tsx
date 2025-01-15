import { View, Text } from "react-native"
import challengesViewStyles from "./styles/challengesView.styles"
import { EWeekDay } from "./components/StreakBar/enum/EWeekDay";
import StreakBar from "./components/StreakBar/StreakBar";


const ChallengesView = () => {
    const mockedStreak = {today: EWeekDay.thursday, streak: 4, startingFrom: EWeekDay.monday};

    return (
        <View style={challengesViewStyles.container}>
            <View style={challengesViewStyles.streakInfoContainer}>
                <View style={challengesViewStyles.yourStreakContainer}>
                    <View style={challengesViewStyles.fireIcon}>

                    </View>

                    <Text style={challengesViewStyles.yourStreakText}>Your daily streak:</Text>
                </View>

                <Text style={challengesViewStyles.yourStreakText}>{mockedStreak.streak}/7</Text>
            </View>
            
            <View style={challengesViewStyles.streakBar}>
                <StreakBar 
                    today={mockedStreak.today} 
                    streak={mockedStreak.streak} 
                    startingFrom={mockedStreak.startingFrom} 
                />
            </View>

            <View style={challengesViewStyles.challengesList}>

            </View>
        </View>
    )
};

export default ChallengesView;