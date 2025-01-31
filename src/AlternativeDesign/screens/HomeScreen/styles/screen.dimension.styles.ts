import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const homeScreenDimensionStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: screenDims.width * 0.08,
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
    statsContainer: {
        alignSelf: "center",
        backgroundColor: "rgba(243, 187, 222, 1)",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 150,
        flexDirection: "row",
        columnGap: 16,
        alignItems: "center"
    },
    statSubcontainer: {
        flexDirection: "row",
        columnGap: 8,
        alignItems: "center"
    },
    statIcon: {
        width: 25, 
        height: 25,
    },
    statText: {
        fontSize: 22,
        fontFamily: "Manrope-Regular",
        fontWeight: 600,
    },
    actionsContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    actionButtonContainer: {
        width: "30%",
    },
    actionButton: {
        backgroundColor: "rgba(53, 52, 83, 1)",
        borderRadius: 8,
        paddingTop: 8,
        paddingBottom: 16,
        justifyContent: "center",
        flexDirection: "column",
        rowGap: 4,
        alignItems: "center",
    },
    actionButtonShadow: {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: -4,
        borderRadius: 8,
        backgroundColor: "rgba(30,29,53,1)",
    },
    actionIcon: {
        width: 40, 
        height: 40, 
    },
    actionText: {
        fontSize: 11,
        fontFamily: "Manrope-Regular",
        fontWeight: 800,
        color: "white",
    }
});

export default homeScreenDimensionStyles;