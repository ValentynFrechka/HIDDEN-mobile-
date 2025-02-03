import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const userBalanceInfoStyles = StyleSheet.create({
    balanceContainer: {
        alignSelf: "stretch",
        flexDirection: "row",
        columnGap: 5,
        alignItems: "center",
    },
    balanceSubcontainer: {
        flexDirection: "row",
        columnGap: 4,
        alignItems: "center"
    },
    balanceIcon: {
        width: 18,
        height: 18,
    },
    balanceTitle: {
        fontSize: 14,
        textAlignVertical: "center",
        color: "white",
        fontFamily: "Roboto-Regular",
        fontWeight: 400,
    },
    balanceLabel: {
        fontSize: 16,
        textAlignVertical: "center",
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
});

export default userBalanceInfoStyles;