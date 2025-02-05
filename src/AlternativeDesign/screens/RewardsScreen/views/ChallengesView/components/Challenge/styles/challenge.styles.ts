import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");
const circleSize = screenDims.width * 0.1;
const bigCircleSize = circleSize * 2;


const challengeStyles = StyleSheet.create({
    verticalContainer: {
        flexDirection: "column",
        rowGap: 10,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 14,
        color: "white"
    },
    buttonsContainer: {
        flexDirection: "row",
        columnGap: 10,
    },
    button: {
        width: screenDims.width * 0.33,
        paddingVertical: screenDims.width * 0.02,
        borderRadius: 120,
    },
    buttonContent: {
        flexDirection: "row", 
        columnGap: 4,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 10,
        fontFamily: "Manrope-Regular",
        fontWeight: 600,
    },
    collectButtonFont: {
        color: "rgba(31, 7, 52, 1)"
    },
    shareButtonFont: {
        color: "white"
    },
    progressBarContainer: {

    },
    innerProgressBar: {
        backgroundColor: "white",
        zIndex: 2, 
        position: "absolute",
        height: 4,
        borderRadius: 1,
    },
    outerProgressBar: {
        backgroundColor: "white",
        height: 4,
        opacity: 0.3,
        borderRadius: 1,
    },
    rewardText: {
        fontSize: 11,
        color: "white"
    },
    
});

export default challengeStyles;