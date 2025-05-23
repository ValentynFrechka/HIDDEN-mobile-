import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const appDimensions = {
    navigationButtonSize: 25,
};

const appStyles = StyleSheet.create({
    backgroundGradient: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -3,
    },
    backgroundImage: {
        position: "absolute",
        alignSelf: "center",
        height: "100%",
        opacity: 0.7,
        zIndex: -1,
    },
    loadingScreenGradient: {
        flex: 1
    },
    tabBarStyle: {
        position: "absolute",
        marginHorizontal: 40,
        paddingHorizontal: 24,
        height: 76,
        borderRadius: 120,
        backgroundColor: "white",
    },
    header: {
        alignItems: "flex-end",
        padding: 8,
    },
    scene: {
        backgroundColor: "transparent"
    },
});

export { appStyles, appDimensions };