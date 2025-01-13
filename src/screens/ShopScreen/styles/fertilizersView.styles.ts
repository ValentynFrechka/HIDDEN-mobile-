import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "space-between",
        alignItems: "stretch",
        marginHorizontal: screenDims.width * 0.05,
        marginVertical: screenDims.height * 0.01,
    },
    spacedVerticalContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    fertilizersListContainer: {
        alignSelf: "stretch",
        flexDirection: "column",
        rowGap: 10,
    },
    buyingContainer: {
        flexDirection: "column",
        rowGap: 2,
        alignItems: "center",
    },
    yourBalanceContainer: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        columnGap: 6,
    },
    horizontalBalanceContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        columnGap: 4,
    },
    yourBalanceText: {
        fontSize: 14,
        color: "white"
    },
    leafIcon: {
        width: 15,
        height: 15,
        backgroundColor: "red",
    },
    balance: {
        fontSize: 15,
        color: "white",
    },
    statusView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: screenDims.height * 0.05,
        marginHorizontal: screenDims.width * 0.1,
    },
});

export default dimensionStyles;