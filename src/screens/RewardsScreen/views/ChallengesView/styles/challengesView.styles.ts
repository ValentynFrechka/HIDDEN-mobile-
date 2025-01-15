import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const challengesViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: screenDims.width * 0.1,
        paddingVertical: screenDims.width * 0.05,
        justifyContent: "center"
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
    streakBar: {
        flex: 1
    },
    challengesList: {

    }
    
});

export default challengesViewStyles;