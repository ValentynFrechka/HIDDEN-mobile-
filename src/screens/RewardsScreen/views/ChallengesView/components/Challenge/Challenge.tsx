import { View, Text, TouchableOpacity } from "react-native";
import { ChallengeProgress } from "./types/ChallengeProgress";
import * as Progress from "react-native-progress";
import { challengeStyles, progressBarParams } from "./styles/challenge.styles";

type ChallengeProps = {
    text: string
    progress: ChallengeProgress
};

const Challenge: React.FC<ChallengeProps> = ({ text, progress }) => {

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
                <Progress.Bar {...progressBarParams.outer} />
                <Progress.Bar progress={1.0} {...progressBarParams.inner} style={{zIndex: 2, position: "absolute", width: `${progress.done/progress.outOf * 100}%`}}/>
            </View>


            {renderButtons()}
        </View>
    );
}

export default Challenge;