import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const treeSkinBlockStyles = StyleSheet.create({
    roundedBlock: {
        justifyContent: "center",
        paddingVertical: screenDims.width * 0.04,
        paddingHorizontal: screenDims.width * 0.05,
        borderRadius: 12,
        backgroundColor: "rgb(164, 140, 184)",
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 10,
        alignItems: "center"
    },
    verticalSubcontainer: {
        flexDirection: "column",
        rowGap: 8,
        alignItems: "center"
    },
    treeImage: {
        width: screenDims.width * 0.21,
        height: screenDims.width * 0.21,
        backgroundColor: "red",
    },
    priceContainer: {
        flexDirection: "row",
        columnGap: 4
    },
    leafIcon: {
        width: 16,
        height: 16,
        backgroundColor: "red",
    },
    priceText: {
        fontSize: 14,
        color: "white",
    },
    nameText: {
        fontSize: 14,
        color: "white"
    },
    button: {
        width: screenDims.width * 0.21,
        paddingVertical: screenDims.width * 0.018,
        backgroundColor: "pink",
        borderRadius: 15,
        alignItems: "center"
    },
    buttonText: {
        fontSize: 12,
    },
    
});

export default treeSkinBlockStyles;