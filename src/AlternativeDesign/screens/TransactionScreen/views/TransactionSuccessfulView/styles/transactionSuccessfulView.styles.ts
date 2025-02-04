import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const transactionSuccessfulViewStyles = StyleSheet.create({
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
        color: "white",
    },
    successIcon: {
        width: 45,
        height: 45,
    },
    returnButton: {
        width: screenDims.width * 0.6,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderRadius: 120,
    },
    returnText: {
        fontSize: 14,
        fontFamily: "Manrope-Regular",
        fontWeight: "600"
    },
});

export default transactionSuccessfulViewStyles;