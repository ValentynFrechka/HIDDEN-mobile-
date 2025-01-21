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
        alignItems: "center",
        width: screenDims.width * 0.8,
        height: screenDims.height * 0.42,
        marginTop: screenDims.height * 0.1,
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 20,
    },
    statGradient: {
        borderRadius: 12,
        alignSelf: "center",
        borderWidth: 0.3,
        borderColor: "white",
    },
    statVerticalContainer: {
        alignSelf: "center",
        flexDirection: "column",
        rowGap: 10,
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    statsContainer: {
        flexDirection: "row",
        columnGap: 16,
        alignItems: "center"
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
        alignItems: "flex-end",
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
    },
    statText: {
        fontSize: 18,
        color: "white",
    },
    actionIcon: {
        width: 40, 
        height: 40, 
    },
    actionText: {
        fontSize: 16,
        color: "white",
    }
});

export default homeScreenDimensionStyles;