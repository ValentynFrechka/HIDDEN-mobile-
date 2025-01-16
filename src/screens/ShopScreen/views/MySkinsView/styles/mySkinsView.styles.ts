import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const mySkinsViewStyles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        alignItems: "center",
        paddingBottom: screenDims.height * 0.02,
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: screenDims.height * 0.02,
    },
    twoColumnContainer: {
        flexDirection: "row",
        columnGap: screenDims.width * 0.05,
        rowGap: screenDims.width * 0.05,
        justifyContent: "center",
        flexWrap: "wrap",
        width: screenDims.width * 0.8
    },
    verticalSubcontainer: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: 24,
    },
    infoSubcontainer: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: 12,
    },
    crossIcon: {
        width: 36,
        height: 36,
        backgroundColor: "red",
    },
    textSubcontainer: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: 6,
    },
    noSkinsText: {
        fontSize: 16,
        color: "white",
    },
    buySkinButton: {
        width: screenDims.width * 0.5,
        paddingVertical: screenDims.width * 0.025,
        backgroundColor: "pink",
        borderRadius: 15,
        alignItems: "center"
    },
    buySkinText: {
        fontSize: 12,
    },
});

export default mySkinsViewStyles;