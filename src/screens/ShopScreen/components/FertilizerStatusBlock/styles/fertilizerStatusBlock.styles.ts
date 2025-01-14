import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const fertilizerStatusBlockStyles = StyleSheet.create({
    roundedBlock: {
        justifyContent: "center",
        marginHorizontal: 2,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 12,
        backgroundColor: "rgb(164, 140, 184)",
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 2,
        alignItems: "center",
    },
    icon: {
        width: 25,
        height: 25,
        backgroundColor: "red"
    },
    amountText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
    },
});

export default fertilizerStatusBlockStyles;