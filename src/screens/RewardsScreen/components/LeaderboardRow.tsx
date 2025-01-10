import { View, Text } from "react-native";
import dimensionStyles from "../styles/leaderboardRow.styles";

type LeaderboardRowProps = {
    rank: number;
    avatarUrl: string;
    name: string;
    tokensEarned: number;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ rank, avatarUrl, name, tokensEarned }) => {


    return (
        <View style={dimensionStyles.roundedBlock}>
            <View style={dimensionStyles.horizontalContainer}>
                <View style={dimensionStyles.leftSubview}>
                    <Text style={dimensionStyles.rank}>{rank}</Text>

                    <View style={dimensionStyles.avatar}>

                    </View>

                    <Text style={dimensionStyles.name}>{name}</Text>
                </View>

                <View style={dimensionStyles.rightSubview}>
                    <View style={dimensionStyles.tokenIcon}>

                    </View>

                    <Text style={dimensionStyles.tokenText}>{tokensEarned} tokens earned</Text>
                </View>
            </View>
        </View>
    );
};

export default LeaderboardRow;