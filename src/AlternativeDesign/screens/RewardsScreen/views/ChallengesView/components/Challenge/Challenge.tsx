import { View, Text, TouchableOpacity } from "react-native";
import { ChallengeProgress } from "./types/ChallengeProgress";
import challengeStyles from "./styles/challenge.styles";
import SecondaryButton from "../../../../../../components/buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../../../../components/buttons/PrimaryButton/PrimaryButton";
import { RewardsScreenIcons } from "../../../../../../icons/RewardsScreenIcons";

type ChallengeProps = {
    text: string
    progress: ChallengeProgress
    reward: number
};

const Challenge: React.FC<ChallengeProps> = ({ text, progress, reward }) => {

    const renderButtons = () => {
        if (progress.done === progress.outOf) {
            return (
                <View style={challengeStyles.buttonsContainer}>
                    <SecondaryButton style={challengeStyles.button}>
                        <View style={challengeStyles.buttonContent}>
                            <Text style={[challengeStyles.buttonText, challengeStyles.collectButtonFont]}>Collect</Text>
                            <RewardsScreenIcons.CollectIcon size={14}/>
                        </View>
                    </SecondaryButton>

                    <PrimaryButton style={challengeStyles.button}>
                        <View style={challengeStyles.buttonContent}>
                            <Text style={[challengeStyles.buttonText, challengeStyles.shareButtonFont]}>Share</Text>
                            <RewardsScreenIcons.ShareIcon size={14}/>
                        </View>
                    </PrimaryButton>
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
                    <View style={challengeStyles.outerProgressBar} />
                </View>
                <View style={[challengeStyles.innerProgressBar, {width: `${progress.done/progress.outOf * 100}%`}]} />
            </View>

            <Text style={challengeStyles.rewardText}>{reward} tokens</Text>

            {renderButtons()}
        </View>
    );
}

export default Challenge;