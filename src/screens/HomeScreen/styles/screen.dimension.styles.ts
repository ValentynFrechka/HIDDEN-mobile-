import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    verticalContainer: {
        flexDirection: "column",
        rowGap: 20,
        alignItems: "center"
    },
    treeImageContainer: {
        width: screenDims.width * 0.8,
        height: screenDims.height * 0.5,
        backgroundColor: "grey",
        marginTop: screenDims.height * 0.1,
    },
    statContainer: {
        flexDirection: "row",
        columnGap: 30,
        alignItems: "center"
    },
    statSubcontainer: {
        flexDirection: "row",
        columnGap: 8,
        alignItems: "center"
    },
    actionContainer: {
        flexDirection: "row",
        columnGap: 20,
        alignItems: "center"
    },
    actionSubcontainer: {
        flexDirection: "column",
        rowGap: 10,
        alignItems: "center"
    },
    statIcon: {
        width: 20, 
        height: 20, 
        backgroundColor: "red"
    },
    statText: {
        fontSize: 20
    },
    actionIcon: {
        width: 40, 
        height: 40, 
        backgroundColor: "red"
    },
});

export default dimensionStyles;