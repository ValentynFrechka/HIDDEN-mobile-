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
    buttonContainer: {
        flexDirection: "row",
        columnGap: 10,
    },
    collectButton: {
        width: screenDims.width * 0.33,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: screenDims.width * 0.02,
        backgroundColor: "rgb(255, 179, 0)",
        borderRadius: screenDims.width * 0.03,
    },
    shareButton: {
        width: screenDims.width * 0.33,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: screenDims.width * 0.02,
        backgroundColor: "rgb(214, 109, 255)",
        borderRadius: screenDims.width * 0.03,
    },
    buttonText: {
        fontSize: 10,
    },
    progressBarContainer: {

    },
    innerProgressBar: {
        zIndex: 2, 
        position: "absolute",
        height: 4,
        borderRadius: 1,
    },
    outerProgressBar: {
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