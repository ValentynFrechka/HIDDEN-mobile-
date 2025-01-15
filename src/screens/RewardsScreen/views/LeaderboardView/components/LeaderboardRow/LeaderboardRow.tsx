import { View, Text } from "react-native";
import leaderboardRowStyles from "./styles/leaderboardRow.styles";

type LeaderboardRowProps = {
    rank: number;
    avatarUrl: string;
    name: string;
    tokensEarned: number;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ rank, avatarUrl, name, tokensEarned }) => {


    return (
        <View style={leaderboardRowStyles.roundedBlock}>
            <View style={leaderboardRowStyles.horizontalContainer}>
                <View style={leaderboardRowStyles.leftSubview}>
                    <Text style={leaderboardRowStyles.rank}>{rank}</Text>

                    <View style={leaderboardRowStyles.avatar}>

                    </View>

                    <Text style={leaderboardRowStyles.name}>{name}</Text>
                </View>

                <View style={leaderboardRowStyles.rightSubview}>
                    <View style={leaderboardRowStyles.tokenIcon}>

                    </View>

                    <Text style={leaderboardRowStyles.tokenText}>{tokensEarned} tokens earned</Text>
                </View>
            </View>
        </View>
    );
};

export default LeaderboardRow;