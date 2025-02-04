import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const streakCircleColors = { 
    greenColor: "rgb(37, 244, 75)"
};

const streakCircleDimensions = {
    circleSize: screenDims.width * 0.05,
    bigCircleSize: screenDims.width * 0.075,
    bigFontSize: screenDims.width * 0.08 / 2,
    regularFontSize: screenDims.width * 0.06 / 2
}

const streakCircleStyles = StyleSheet.create({
    bigCircle: {
        width: streakCircleDimensions.bigCircleSize,
        height: streakCircleDimensions.bigCircleSize,
        borderRadius: streakCircleDimensions.bigCircleSize / 2,
        borderColor: streakCircleColors.greenColor,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    regularCircle: {
        width: streakCircleDimensions.circleSize,
        height: streakCircleDimensions.circleSize,
        borderRadius: streakCircleDimensions.circleSize / 2,
        borderColor: streakCircleColors.greenColor,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    bigText: {
        fontSize: streakCircleDimensions.bigFontSize,
        fontWeight: "bold",
    },
    regularText: {
        fontSize: streakCircleDimensions.regularFontSize,
        fontWeight: "bold",
    },
    textOverlay: {
        position: "absolute", 
        width: "100%", 
        height: "100%", 
        zIndex: 1,
        borderRadius: streakCircleDimensions.circleSize / 2,
        backgroundColor: "white"//streakCircleColors.greenColor,
    },
    bigTextOverlay: {
        position: "absolute", 
        width: "100%", 
        height: "100%", 
        zIndex: 1,
        borderRadius: streakCircleDimensions.bigCircleSize / 2,
        backgroundColor: streakCircleColors.greenColor,
    }
});

export { streakCircleStyles, streakCircleColors, streakCircleDimensions };