import { View, Text, ScrollView } from "react-native";
import { leaderboardDataMock } from "../mocks/leaderboardDataMock";
import LeaderboardRow from "../components/LeaderboardRow";
import dimensionStyles from "../styles/leaderboardView.styles";

const LeaderboardView = () => {


    return (
        <View style={dimensionStyles.container}>
            <Text style={dimensionStyles.title}>My community</Text>

            <ScrollView>
                {leaderboardDataMock.map((user) => (
                    <LeaderboardRow
                        key={user.rank}
                        rank={user.rank}
                        avatarUrl={user.avatarUrl}
                        name={user.name}
                        tokensEarned={user.tokensEarned}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default LeaderboardView;