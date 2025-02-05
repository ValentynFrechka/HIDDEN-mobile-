import { View } from "react-native";
import { EWeekDay } from "./enum/EWeekDay";
import streakBarStyles from "./styles/streakBar.styles";
import StreakBlock from "./StreakBlock/StreakBlock";

type StreakBarProps = {
    streak: number;
}

const StreakBar: React.FC<StreakBarProps> = ({ streak }) => {

    const getStreakDays = (streak: number) => {
        let streakDays = [];
        let today = new Date();
    
        for (let i = streak - 1; i >= 0; i--) {
            let date = new Date();
            date.setDate(today.getDate() - i);

            streakDays.push({
                weekDay: date.toLocaleDateString("en-US", { weekday: "short" }),
                date: date.getDate().toString().padStart(2, "0"),
                isActive: true
            });
        }

        for (let i = 1; i + streak <= 7; i++) {
            let date = new Date();
            date.setDate(today.getDate() + i);
    
            streakDays.push({
                weekDay: date.toLocaleDateString("en-US", { weekday: "short" }),
                date: date.getDate().toString().padStart(2, "0"),
                isActive: false
            });
        }
    
        return streakDays;
    };

    const renderCircles = (streak: number) => {
        const streakDays = getStreakDays(streak);
        
        return streakDays.map((streakDay, index) => (
            <StreakBlock 
                key={index}
                weekDay={streakDay.weekDay} 
                date={streakDay.date}
                isActive={streakDay.isActive} 
            />
        ));
    }

    return (
        <View style={streakBarStyles.container}>
            {renderCircles(streak)}
        </View>
    );
};

export default StreakBar;