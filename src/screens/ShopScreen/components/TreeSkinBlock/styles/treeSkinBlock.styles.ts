import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const treeSkinBlockStyles = StyleSheet.create({
    gradient: {
        borderRadius: 12,
        borderWidth: 0.3,
        borderColor: "white",
    },
    roundedBlock: {
        justifyContent: "center",
        paddingVertical: screenDims.width * 0.04,
        paddingHorizontal: screenDims.width * 0.07,
        borderRadius: 12,
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 8,
        alignItems: "center"
    },
    verticalSubcontainer: {
        flexDirection: "column",
        rowGap: 9,
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
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    nameText: {
        fontSize: 14,
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
    button: {
        width: screenDims.width * 0.21,
        paddingVertical: screenDims.width * 0.018,
        backgroundColor: "white",
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