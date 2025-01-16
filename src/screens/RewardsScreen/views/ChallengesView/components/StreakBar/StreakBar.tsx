import { View } from "react-native";
import { EWeekDay } from "./enum/EWeekDay";
import StreakCircle from "./StreakCircle/StreakCircle";
import streakBarStyles from "./styles/streakBar.styles";

type StreakBarProps = {
    today: EWeekDay;
    streak: number;
    startingFrom: EWeekDay;
}

const StreakBar: React.FC<StreakBarProps> = ({ today, streak, startingFrom }) => {

    const getStreakDays = () => {
        let streakDays: EWeekDay[] = [];
        let keys = Object.keys(EWeekDay);
        let values = Object.values(EWeekDay);
        for (let i = keys.indexOf(startingFrom) + 1; streakDays.length < 7; i++) {
            if (i >= keys.length) {
                i = 0;
            }
            let streakDay = values.at(i);
            if (streakDay) {
                streakDays.push(streakDay);
            }
        }
        return streakDays;
    }

    const renderCircles = () => {
        const streakDays = getStreakDays();
        const finishedDays = streakDays.slice(0, streak);
        const unfinishedDays = streakDays.slice(streak);

        return [
            finishedDays.map((day, index) => (
                <StreakCircle 
                    key={index}
                    day={day} 
                    isToday={day === today ? true : false} 
                    isActive={true} 
                />
            )),
            unfinishedDays.map((day, index) => (
                <StreakCircle 
                    key={index}
                    day={day} 
                    isToday={false} 
                    isActive={false} 
                />
            )),
        ]
    }

    return (
        <View style={streakBarStyles.container}>
            <View style={streakBarStyles.greenLine}/>
            <View style={streakBarStyles.circlesOverlay}>
                {renderCircles()}
            </View>
        </View>
    );
};

export default StreakBar;