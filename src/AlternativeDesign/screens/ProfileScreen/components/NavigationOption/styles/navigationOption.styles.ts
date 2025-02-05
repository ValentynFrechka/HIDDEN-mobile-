import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const navigationOptionStyles = StyleSheet.create({
    optionsContainer: {
        flexDirection: "column",
        rowGap: 8,
    },
    optionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
    },
    optionInfoSubcontainer: {
        flexDirection: "row",
        columnGap: 8,
    },
    optionIcon: {
        width: 22,
        height: 22,
    },
    optionText: {
        fontSize: 16,
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
    navigationArrow: {
        width: 12,
        height: 12,
    }
});

export default navigationOptionStyles;