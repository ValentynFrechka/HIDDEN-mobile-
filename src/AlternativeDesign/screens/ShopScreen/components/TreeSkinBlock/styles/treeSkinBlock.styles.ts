import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const treeSkinBlockStyles = StyleSheet.create({
    roundedBlock: {
        justifyContent: "center",
        paddingVertical: screenDims.width * 0.04,
        paddingHorizontal: screenDims.width * 0.07,
        borderRadius: 12,
        backgroundColor: "white",
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 4,
        alignItems: "center"
    },
    verticalSubcontainer: {
        flexDirection: "column",
        rowGap: 4,
        alignItems: "center"
    },
    treeImage: {
        width: screenDims.width * 0.25,
        height: screenDims.width * 0.25 * 112 / 110,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    leafIcon: {
        width: 16,
        height: 16,
    },
    priceText: {
        fontSize: 14,
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    nameText: {
        fontSize: 14,
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
    button: {
        width: screenDims.width * 0.21,
        paddingVertical: screenDims.width * 0.018,
        borderRadius: 15,
        alignItems: "center"
    },
    buttonText: {
        fontSize: 10,
        fontFamily: "Manrope-Regular",
        fontWeight: "800",
    },
    
});

export default treeSkinBlockStyles;