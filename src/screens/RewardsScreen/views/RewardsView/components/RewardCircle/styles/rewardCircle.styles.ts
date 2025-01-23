import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const rewardCircleStyles = StyleSheet.create({
    gradient: {

    },
    circle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white",
    },
    icon: {
    }
    
});

export default rewardCircleStyles;