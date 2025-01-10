import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: screenDims.width * 0.05,
        marginVertical: screenDims.height * 0.02,
    },
    title: {
        fontSize: 20,
    },
});

export default dimensionStyles;