import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const fertilizersShopRowStyles = StyleSheet.create({
    roundedBlock: {
        justifyContent: "center",
        marginVertical: 5,
        padding: 15,
        borderRadius: 12,
        backgroundColor: "rgb(164, 140, 184)",
        borderWidth: 0.5,
        borderColor: "rgb(201, 189, 224)"
    },
    horizontalContainer: {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
    },
    horizontalSubcontainer: {
        flexDirection: "row",
        columnGap: 24,
        flexShrink: 1,
    },
    verticalBuyContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        rowGap: 6,
        alignItems: "flex-start",
    },
    fertilizerContainer: {
        flexDirection: "row",
        columnGap: 5,
        alignItems: "center"
    },
    fertilizerIcon: {
        width: 18,
        height: 18,
        backgroundColor: "red",
    },
    fertilizerName: {
        fontSize: 16,
        color: "white",
        textAlignVertical: "center"
    },
    buyButton: {
        borderRadius: 10,
        backgroundColor: "pink",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 32,
    },
    buyText: {
        fontSize: 12,
    },
    description: {
        fontSize: 12, 
        color: "white",
        textAlign: "center",
        flexShrink: 1,
    },
    verticalAmountPriceContainer: {
        marginLeft: 24,
        flexDirection: "column",
        rowGap: 5,
        alignItems: "flex-end"
    },
    horizontalAmountContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 6,
    },
    minusText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    amountText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    plusText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    horizontalPriceContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    leafIcon: {
        width: 16,
        height: 16,
        backgroundColor: "red",
    },
    priceText: {
        fontSize: 20,
        color: "white",
        textAlignVertical: "center",
    },
});

export default fertilizersShopRowStyles;