import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const fertilizerStatusBlockStyles = StyleSheet.create({
    roundedBlock: {
        justifyContent: "center",
        marginHorizontal: 2,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 12,
        backgroundColor: "white",
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 2,
        alignItems: "center",
    },
    icon: {
        width: 25,
        height: 25,
    },
    amountText: {
        fontSize: 14,
        fontFamily: "Manrope-Regular",
        fontWeight: "800",
    },
});

export default fertilizerStatusBlockStyles;