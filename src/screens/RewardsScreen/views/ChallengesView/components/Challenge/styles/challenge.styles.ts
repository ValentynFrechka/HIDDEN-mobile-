import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");
const circleSize = screenDims.width * 0.1;
const bigCircleSize = circleSize * 2;

const progressBarParams = {
    outer: {
        width: null,
        height: screenDims.width * 0.04,
        borderRadius: screenDims.width * 0.04,
        borderWidth: 2,
        color: "rgb(186, 177, 202)",
        borderColor: "rgb(186, 177, 202)",
    },
    inner: {
        width: null,
        height: screenDims.width * 0.04,
        borderRadius: screenDims.width * 0.04,
        borderWidth: 2,
        color: "rgb(186, 177, 202)",
        borderColor: "rgb(186, 177, 202)",
    }
};

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
        fontSize: 12,
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
    }
    
});

export { challengeStyles, progressBarParams };