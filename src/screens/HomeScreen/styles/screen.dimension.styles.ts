import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const homeScreenDimensionStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: screenDims.width * 0.05,
        paddingBottom: screenDims.height * 0.05,
    },
    treeImageContainer: {
        alignSelf: "center",
        width: screenDims.width * 0.8,
        height: screenDims.height * 0.42,
        backgroundColor: "grey",
        marginTop: screenDims.height * 0.1,
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 20,
    },
    statsContainer: {
        flexDirection: "row",
        columnGap: 16,
        alignItems: "center"
    },
    statVerticalContainer: {
        alignSelf: "center",
        flexDirection: "column",
        rowGap: 10,
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 12,
        borderWidth: 0.3,
        borderColor: "white"
    },
    statTitle: {
        fontSize: 16,
        color: "white",
    },
    statSubcontainer: {
        flexDirection: "row",
        columnGap: 8,
        alignItems: "center"
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    actionSubcontainer: {
        flexDirection: "column",
        rowGap: 10,
        alignItems: "center",
        padding: 3,
    },
    statIcon: {
        width: 20, 
        height: 20, 
        backgroundColor: "red"
    },
    statText: {
        fontSize: 18,
        color: "white",
    },
    actionIcon: {
        width: 40, 
        height: 40, 
        backgroundColor: "red"
    },
    actionText: {
        fontSize: 16,
        color: "white",
    }
});

export default homeScreenDimensionStyles;