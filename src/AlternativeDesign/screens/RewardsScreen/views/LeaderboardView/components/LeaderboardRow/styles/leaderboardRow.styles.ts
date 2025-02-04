import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const leaderboardRowStyles = StyleSheet.create({
    gradient: {
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 0.3,
        borderColor: "rgb(201, 189, 224)",
    },
    roundedBlock: {
        flex: 1,
        marginBottom: 16,
        justifyContent: "center",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 12,
    },
    horizontalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftSubview: {
        flexDirection: "row",
        columnGap: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    rank: {
        marginRight: 2,
        fontSize: 18,
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: 600,
    },
    userContainer: {
        flexDirection: "row",
        columnGap: 8,
        alignItems: "center",
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 16,
    },
    name: {
        fontSize: 16,
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "500"
    },
    rightSubview: {
        flexDirection: "row",
        columnGap: 4,
        alignItems: "center"
    },
    tokenIcon: {
        width: 20,
        height: 20,
    },
    tokenText: {
        fontSize: 14,
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
});

export default leaderboardRowStyles;