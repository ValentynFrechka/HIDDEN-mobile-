import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const appStyles = StyleSheet.create({
    backgroundGradient: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
    },
    loadingScreenGradient: {
        flex: 1
    },
    tabBarStyle: {
        height: 60,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        backgroundColor: "rgb(76, 54, 95)",
    },
    header: {
        alignItems: "flex-end",
        padding: 8,
    },
    scene: {
        backgroundColor: "transparent"
    },
});

export default appStyles;