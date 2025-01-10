import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    roundedBlock: {
        flex: 1,
        justifyContent: "center",
        padding: 3,
        borderRadius: 5,
        backgroundColor: "rgb(127, 114, 138)",
    },
    horizontalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    leftSubview: {
        flexDirection: "row",
        columnGap: 5,
    },
    rank: {
        marginRight: 2,
        fontSize: 14,
        textAlignVertical: "center"
    },
    avatar: {
        width: 18,
        height: 18,
        backgroundColor: "red",
    },
    name: {
        fontSize: 14,
        textAlignVertical: "center"
    },
    rightSubview: {
        flexDirection: "row",
        columnGap: 3,
    },
    tokenIcon: {
        width: 16,
        height: 16,
        backgroundColor: "red",
    },
    tokenText: {
        fontSize: 12,
        textAlignVertical: "center",
    },
});

export default dimensionStyles;