import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    verticalContainer: {
        flex: 1,
        flexDirection: "column",
        rowGap: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    successSubcontainer: {
        flexDirection: "column",
        rowGap: 10,
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 20,
    },
    successIcon: {
        width: 50,
        height: 50,
        backgroundColor: "red"
    },
    returnButton: {
        width: screenDims.width * 0.5
    },
});

export default dimensionStyles;