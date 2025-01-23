import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const fertilizersShopRowStyles = StyleSheet.create({
    gradient: {
        marginVertical: 5,
        borderRadius: 12,
        borderWidth: 0.3,
        borderColor: "rgb(201, 189, 224)"
    },
    roundedBlock: {
        justifyContent: "center",
        paddingVertical: 15,
        paddingLeft: 15,
        paddingRight: 7,
        borderRadius: 12,
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
        rowGap: 12,
        alignItems: "flex-start",
    },
    fertilizerContainer: {
        flexDirection: "row",
        columnGap: 4,
        alignItems: "center"
    },
    fertilizerIcon: {
        width: 20,
        height: 20,
    },
    fertilizerName: {
        fontSize: 16,
        color: "white",
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
    buyButton: {
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 32,
    },
    buyText: {
        fontSize: 10,
        fontFamily: "Manrope-Regular",
        fontWeight: "800",
    },
    description: {
        alignSelf: "center",
        fontSize: 14, 
        color: "white",
        textAlign: "center",
        flexShrink: 1,
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
    verticalAmountPriceContainer: {
        marginLeft: 24,
        flexDirection: "column",
        rowGap: 4,
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    horizontalAmountContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
    },
    amountButton: {
        padding: 8,
    },
    minusIcon: {
        width: 12,
        height: 12,
    },
    amountText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    plusIcon: {
        width: 12,
        height: 12,
    },
    horizontalPriceContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
        marginRight: 8,
    },
    leafIcon: {
        width: 20,
        height: 20,
    },
    priceText: {
        fontSize: 20,
        color: "white",
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
});

export default fertilizersShopRowStyles;