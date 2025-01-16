import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const rewardCircleStyles = StyleSheet.create({
    circle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "rgb(182, 147, 202)",
    },
    icon: {
        backgroundColor: "red"
    }
    
});

export default rewardCircleStyles;