import { View, Text } from "react-native";
import leaderboardRowStyles from "./styles/leaderboardRow.styles";
import { FitImage } from "../../../../../../../components/FitImage/FitImage";
import { RewardsScreenIcons } from "../../../../../../icons/RewardsScreenIcons";

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

                    <View style={leaderboardRowStyles.userContainer}>
                        <View style={leaderboardRowStyles.avatar}>
                            <RewardsScreenIcons.AvatarExampleIcon size={leaderboardRowStyles.avatar.height}/>
                        </View>

                        <Text style={leaderboardRowStyles.name}>{name}</Text>
                    </View>
                </View>

                <View style={leaderboardRowStyles.rightSubview}>
                    <RewardsScreenIcons.TokenIcon size={leaderboardRowStyles.tokenIcon.height} />

                    <Text style={leaderboardRowStyles.tokenText}>{tokensEarned} tokens earned</Text>
                </View>
            </View>
        </View>
    );
};

export default LeaderboardRow;