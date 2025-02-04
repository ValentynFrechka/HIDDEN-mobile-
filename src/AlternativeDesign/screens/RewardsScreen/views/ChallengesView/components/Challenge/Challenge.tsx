import { View, Text, TouchableOpacity } from "react-native";
import { ChallengeProgress } from "./types/ChallengeProgress";
import * as Progress from "react-native-progress";
import challengeStyles from "./styles/challenge.styles";
import { Gradient } from "../../../../../../../components/Gradient";

type ChallengeProps = {
    text: string
    progress: ChallengeProgress
    reward: number
};

const Challenge: React.FC<ChallengeProps> = ({ text, progress, reward }) => {

    const renderButtons = () => {
        if (progress.done === progress.outOf) {
            return (
                <View style={challengeStyles.buttonContainer}>
                    <TouchableOpacity style={challengeStyles.collectButton}>
                        <Text style={challengeStyles.buttonText}>Collect the reward</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={challengeStyles.shareButton}>
                        <Text style={challengeStyles.buttonText}>Share with community</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    return (
        <View style={challengeStyles.verticalContainer}>
            <View style={challengeStyles.textContainer}>
                <Text style={challengeStyles.text}>{text}</Text>
                <Text style={challengeStyles.text}>{progress.done}/{progress.outOf}</Text>
            </View>
            
            <View style={challengeStyles.progressBarContainer}>
                <View>
                    <Gradient style={challengeStyles.outerProgressBar} />
                </View>
                <Gradient style={[challengeStyles.innerProgressBar, {width: `${progress.done/progress.outOf * 100}%`}]} />
            </View>

            <Text style={challengeStyles.rewardText}>{reward} tokens</Text>

            {renderButtons()}
        </View>
    );
}

export default Challenge;