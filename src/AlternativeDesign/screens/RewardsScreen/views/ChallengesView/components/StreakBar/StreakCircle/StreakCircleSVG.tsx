import { View } from "react-native";
import { EWeekDay } from "../enum/EWeekDay";
import { streakCircleStyles, streakCircleColors, streakCircleDimensions } from "./styles/streakCircle.styles";
import Svg, { Circle, Defs, Mask, Rect, Text } from "react-native-svg";

type StreakCircleProps = {
    day: EWeekDay;
    isToday: boolean;
    isActive: boolean;
}

const StreakCircleSVG: React.FC<StreakCircleProps> = ({ day, isToday, isActive }) => {

    const getStyleForCircle = () => {
        return [
            isToday ? streakCircleStyles.bigCircle : streakCircleStyles.regularCircle,
        ]
    };

    return (
        <View style={getStyleForCircle()}>
            <Svg 
                width={isToday ? streakCircleDimensions.bigCircleSize : streakCircleDimensions.circleSize} 
                height={isToday ? streakCircleDimensions.bigCircleSize : streakCircleDimensions.circleSize}
            >
                <Defs>
                <Mask id="text-mask">
                    <Rect 
                        width={isToday ? streakCircleDimensions.bigCircleSize : streakCircleDimensions.circleSize} 
                        height={isToday ? streakCircleDimensions.bigCircleSize : streakCircleDimensions.circleSize} 
                        fill="white" 
                    />
                    <Text
                        x="50%"
                        y={isToday ? streakCircleDimensions.bigFontSize / 1.05 : streakCircleDimensions.regularFontSize / 1.1}//"55%"}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fontSize={isToday ? streakCircleDimensions.bigFontSize : streakCircleDimensions.regularFontSize}
                        fill="black"
                        fontWeight="bold"
                    >
                    {day}
                    </Text>
                </Mask>
                </Defs>
                
                <Circle
                    cx={isToday ? streakCircleDimensions.bigCircleSize / 2 : streakCircleDimensions.circleSize / 2}
                    cy={isToday ? streakCircleDimensions.bigCircleSize / 2 : streakCircleDimensions.circleSize / 2}
                    r={isToday ? streakCircleDimensions.bigCircleSize / 2 : streakCircleDimensions.circleSize / 2}
                    fill={isActive ? streakCircleColors.greenColor : "transparent"}
                    mask="url(#text-mask)"
                />

                {!isActive && (
                <Text
                    x="50%"
                    y={isToday ? streakCircleDimensions.bigFontSize / 1.25 : streakCircleDimensions.regularFontSize / 1.1}//"55%"}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize={isToday ? streakCircleDimensions.bigFontSize : streakCircleDimensions.regularFontSize}
                    fill={streakCircleColors.greenColor}
                    fontWeight="bold"
                >
                    {day}
                </Text>
                )}
            </Svg>
        </View>
    );
};

export default StreakCircleSVG;