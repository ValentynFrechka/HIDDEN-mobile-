import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const transactionConfirmationViewStyles = StyleSheet.create({
    verticalContainer: {
        flex: 1,
        marginHorizontal: screenDims.width * 0.15,
        flexDirection: "column",
        rowGap: 30,
        justifyContent: "flex-start",
    },
    infoContainer: {
        flexDirection: "column",
        rowGap: 10,
        alignItems: "stretch"
    },
    infoSubcontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
    },
    infoLabel: {
        fontSize: 18,
        color: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: screenDims.width * 0.30,
        paddingVertical: 8,
    },
    buttonText: {
        fontFamily: "Manrope-Regular",
        fontSize: 14,
        fontWeight: 600,
    },
});

export default transactionConfirmationViewStyles;