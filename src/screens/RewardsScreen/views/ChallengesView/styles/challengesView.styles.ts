import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const challengesViewStyles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        paddingBottom: screenDims.width * 0.05,
    },
    container: {
        marginHorizontal: screenDims.width * 0.1,
        marginTop: screenDims.width * 0.05,
    },
    streakInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    yourStreakContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    fireIcon: {
        width: 18,
        height: 18,
        backgroundColor: "red",
    },
    yourStreakText: {
        color: "white",
        fontSize: 14,
    },
    challengesList: {
        flexDirection: "column",
        justifyContent: "center",
        rowGap: 30,
    },
    challengesTitle: {
        fontSize: 18,
        textAlign: "center",
        color: "white",
    },
    challengesContainer: {
        flexDirection: "column",
        rowGap: 20,
    },
    challengesSubcontainer: {
        flexDirection: "column",
        rowGap: 15,
    },
    
});

export default challengesViewStyles;