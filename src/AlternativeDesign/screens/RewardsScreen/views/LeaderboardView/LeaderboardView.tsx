import { View, Text, ScrollView, FlatList } from "react-native";
import { leaderboardDataMock } from "../../mocks/leaderboardDataMock";
import LeaderboardRow from "./components/LeaderboardRow/LeaderboardRow";
import leaderboardViewStyles from "./styles/leaderboardView.styles";
import { useEffect } from "react";

const LeaderboardView = () => {

    return (
        <View style={leaderboardViewStyles.container}>
            <Text style={leaderboardViewStyles.title}>My community</Text>

            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                {/* {leaderboardDataMock.map((user) => (
                    <LeaderboardRow
                        key={user.rank.toString()}
                        rank={user.rank}
                        avatarUrl={user.avatarUrl}
                        name={user.name}
                        tokensEarned={user.tokensEarned}
                    />
                ))} */}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={leaderboardDataMock}
                    keyExtractor={(item) => item.rank.toString()}
                    renderItem={({ item }) => (
                        <LeaderboardRow
                            rank={item.rank}
                            avatarUrl={item.avatarUrl}
                            name={item.name}
                            tokensEarned={item.tokensEarned}
                        />
                    )}
                />
            {/* </ScrollView> */}
        </View>
    );
};

export default LeaderboardView;