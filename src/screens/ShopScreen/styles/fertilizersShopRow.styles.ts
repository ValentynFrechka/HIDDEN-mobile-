import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    roundedBlock: {
        flex: 1,
        justifyContent: "center",
        marginVertical: 5,
        padding: 8,
        borderRadius: 12,
        backgroundColor: "rgb(164, 140, 184)",
        borderWidth: 0.3,
        borderColor: "rgb(201, 189, 224)"
    },
    horizontalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    verticalBuyContainer: {
        flexDirection: "column",
        rowGap: 5,
        alignItems: "center",
    },
    fertilizerContainer: {
        flexDirection: "row",
        columnGap: 3,
        alignItems: "center"
    },
    fertilizerIcon: {
        width: 18,
        height: 18,
        backgroundColor: "red",
    },
    fertilizerName: {
        fontSize: 14,
        color: "white",
        textAlignVertical: "center"
    },
    buyButton: {
        borderRadius: 10,
        backgroundColor: "pink",
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    buyText: {
        fontSize: 12,
    },
    description: {
        fontSize: 12, 
        color: "white",
        textAlign: "center"
    },
    verticalAmountPriceContainer: {
        flexDirection: "column",
        rowGap: 5,
        alignItems: "flex-end"
    },
    horizontalAmountContainer: {
        flexDirection: "row",
        columnGap: 3,
    },
    minusText: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    amountText: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    plusText: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    horizontalPriceContainer: {
        flexDirection: "row",
        columnGap: 2,
    },
    leafIcon: {
        width: 16,
        height: 16,
        backgroundColor: "red",
    },
    priceText: {
        fontSize: 12,
        color: "white",
        textAlignVertical: "center",
    },
});

export default dimensionStyles;