import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

export default dimensionStyles;