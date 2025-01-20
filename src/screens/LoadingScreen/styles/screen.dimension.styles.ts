import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const loadingScreenDimensionStyles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 18,
        justifyContent: "center",
        alignItems: "center"
    },
    circleStyle: {
        position: "absolute",
        zIndex: 0,
        elevation: 0,
    },
    loadingText: {
        zIndex: 1,
        elevation: 1,
        textAlign: "center",
        width: screenDims.width * 0.27,
        fontSize: 18,
        color: "white",
    },
    doneIcon: {
        width: 60,
        height: 60,
        backgroundColor: "red"
    },
    doneTitle: {
        textAlign: "center",
        width: screenDims.width * 0.6,
        fontSize: 26,
        color: "white",
    },
    doneText: {
        textAlign: "center",
        width: screenDims.width * 0.6,
        fontSize: 18,
        color: "white",
    },
});

const circleProps = {
    size: screenDims.width * 0.6,
    color: "rgb(115,115,155)",
    strokeCap: "round",
    indeterminate: true,
    indeterminateAnimationDuration: 3000,
    borderWidth: 12
};

export { loadingScreenDimensionStyles, circleProps };