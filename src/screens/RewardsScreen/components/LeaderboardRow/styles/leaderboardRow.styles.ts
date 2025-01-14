import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const leaderboardRowStyles = StyleSheet.create({
    roundedBlock: {
        flex: 1,
        justifyContent: "center",
        marginVertical: 5,
        padding: 8,
        borderRadius: 12,
        backgroundColor: "rgb(164, 140, 184)",
        borderWidth: 0.3,
        borderColor: "rgb(201, 189, 224)"
    },
    horizontalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    leftSubview: {
        flexDirection: "row",
        columnGap: 5,
        alignItems: "center"
    },
    rank: {
        marginRight: 2,
        fontSize: 14,
        color: "white",
        textAlignVertical: "center"
    },
    avatar: {
        width: 18,
        height: 18,
        backgroundColor: "red",
    },
    name: {
        fontSize: 14,
        color: "white",
        textAlignVertical: "center"
    },
    rightSubview: {
        flexDirection: "row",
        columnGap: 3,
        alignItems: "center"
    },
    tokenIcon: {
        width: 16,
        height: 16,
        backgroundColor: "red",
    },
    tokenText: {
        fontSize: 12,
        color: "white",
        textAlignVertical: "center",
    },
});

export default leaderboardRowStyles;