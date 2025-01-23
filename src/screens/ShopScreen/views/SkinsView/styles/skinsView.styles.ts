import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const skinsViewStyles = StyleSheet.create({
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
        width: screenDims.width * 0.9
    },
    yourBalanceContainer: {
        marginHorizontal: screenDims.width * 0.08,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 6,
    },
    horizontalBalanceContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 4,
    },
    yourBalanceText: {
        fontSize: 14,
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
    leafIcon: {
        width: 18,
        height: 18,
    },
    balance: {
        fontSize: 16,
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    
});

export default skinsViewStyles;