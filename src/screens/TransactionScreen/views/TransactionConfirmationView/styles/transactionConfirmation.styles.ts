import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../../../../styles/global.dimension.styles";

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
    buttonWrap: {
        width: screenDims.width * 0.30,
    },
});

export default transactionConfirmationViewStyles;