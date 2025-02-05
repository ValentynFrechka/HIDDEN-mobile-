import { Text, View } from "react-native";
import { EWeekDay } from "../enum/EWeekDay";
import { streakBlockColors, streakBlockDimensions, streakBlockStyles } from "./styles/streakBlock.styles";
import { RewardsScreenIcons } from "../../../../../../../icons/RewardsScreenIcons";

type StreakBlockProps = {
    weekDay: string;
    date: string;
    isActive: boolean;
}

const StreakBlock: React.FC<StreakBlockProps> = ({ weekDay, date, isActive }) => {

    const getStyleForBlock= () => {
        return [
            (isActive ? 
                {
                    backgroundColor: streakBlockColors.active,
                    borderColor: streakBlockColors.activeBorder,
                } 
                : 
                {
                    backgroundColor: streakBlockColors.inactive,
                    borderColor: streakBlockColors.inactiveBorder,
                }
            )
        ]
    };

    const getStyleForText = () => {
        return [
            (isActive ? {color: streakBlockColors.activeText} : {color: streakBlockColors.inactiveText}) 
        ]
    }

    return (
        <View style={[streakBlockStyles.block, getStyleForBlock()]}>
            <RewardsScreenIcons.StreakFireIcon size={streakBlockDimensions.fireIconSize}/>
            <Text style={[streakBlockStyles.dateLabel, getStyleForText()]}>{date}</Text>
            <Text style={[streakBlockStyles.weekDayLabel, getStyleForText()]}>{weekDay}</Text>
        </View>
    )
};

export default StreakBlock;