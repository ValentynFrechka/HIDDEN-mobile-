import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const rewardCircleStyles = StyleSheet.create({
    shadow: {
        position: "absolute",
        backgroundColor: "rgba(170, 170, 170, 1)",
        top: 0,
        left: 0,
        right: 0,
        bottom: -4,
        zIndex: -1,
    },
    circle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    icon: {
    }
    
});

export default rewardCircleStyles;