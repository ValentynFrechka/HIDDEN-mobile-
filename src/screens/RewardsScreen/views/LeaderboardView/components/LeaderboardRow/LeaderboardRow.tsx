import { View, Text } from "react-native";
import leaderboardRowStyles from "./styles/leaderboardRow.styles";
import { FitImage } from "../../../../../../components/FitImage/FitImage";
import { RewardsScreenIcons } from "../../../../../../icons/RewardsScreen.icons";
import { BlurryGradient } from "../../../../../../components/BlurryGradient";

type LeaderboardRowProps = {
    rank: number;
    avatarUrl: string;
    name: string;
    tokensEarned: number;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ rank, avatarUrl, name, tokensEarned }) => {


    return (
        <BlurryGradient style={leaderboardRowStyles.gradient}>
            <View style={leaderboardRowStyles.roundedBlock}>
                <View style={leaderboardRowStyles.horizontalContainer}>
                    <View style={leaderboardRowStyles.leftSubview}>
                        <Text style={leaderboardRowStyles.rank}>{rank}</Text>

                        <View style={leaderboardRowStyles.userContainer}>
                            <View style={leaderboardRowStyles.avatar}>
                                <RewardsScreenIcons.AvatarExampleIcon />
                            </View>

                            <Text style={leaderboardRowStyles.name}>{name}</Text>
                        </View>
                    </View>

                    <View style={leaderboardRowStyles.rightSubview}>
                        <View style={leaderboardRowStyles.tokenIcon}>
                            <FitImage src={RewardsScreenIcons.tokenIcon} />
                        </View>

                        <Text style={leaderboardRowStyles.tokenText}>{tokensEarned} tokens earned</Text>
                    </View>
                </View>
            </View>
        </BlurryGradient>
    );
};

export default LeaderboardRow;