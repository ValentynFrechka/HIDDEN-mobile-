import { View, Text } from "react-native";
import { EWeekDay } from "../enum/EWeekDay";
import { streakCircleStyles, streakCircleColors } from "./styles/streakCircle.styles";

type StreakCircleProps = {
    day: EWeekDay;
    isToday: boolean;
    isActive: boolean;
}

const StreakCircle: React.FC<StreakCircleProps> = ({ day, isToday, isActive }) => {

    const getStyleForCircle = () => {
        return [
            (isToday ? streakCircleStyles.bigCircle : streakCircleStyles.regularCircle), 
            (isActive ? {backgroundColor: streakCircleColors.greenColor} : {backgroundColor: "rgb(76, 54, 95)"})
        ]
    };

    const getStyleForText = () => {
        return [
            (isToday ? streakCircleStyles.bigText : streakCircleStyles.regularText),
            (isActive ? {color: "rgb(76, 54, 95)"} : {color: streakCircleColors.greenColor}) 
        ]
    }

    return (
        <View style={getStyleForCircle()}>
            <Text style={getStyleForText()}>{day}</Text>
        </View>
    );
};

export default StreakCircle;