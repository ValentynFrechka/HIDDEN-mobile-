import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    barRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    activeBorder: {
        paddingBottom: 3,
        borderBottomWidth: 2,
    },
    inactiveBorder: {
        paddingBottom: 3,
    },
    text: {
        fontSize: 14,
    }
    
});

export default dimensionStyles;