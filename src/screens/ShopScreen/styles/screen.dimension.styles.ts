import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgb(112, 21, 182)"
    },
    topBar: {
        marginHorizontal: screenDims.width * 0.1,
        marginVertical: screenDims.height * 0.02,
    }
});

export default dimensionStyles;