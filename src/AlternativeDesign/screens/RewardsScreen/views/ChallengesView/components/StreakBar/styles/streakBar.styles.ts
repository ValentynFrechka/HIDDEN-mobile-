import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");
const circleSize = screenDims.width * 0.1;
const bigCircleSize = circleSize * 2;

const streakBarStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        columnGap: 12,
        paddingVertical: 20,
    },
    greenLine: {
        zIndex: 1,
        position: "absolute",
        width: "100%",
        height: 3,
        backgroundColor: "lightgreen"
    },
    circlesOverlay: {
        zIndex: 2,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default streakBarStyles;