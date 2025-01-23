import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../../styles/global.dimension.styles";

const screenDims = Dimensions.get("screen");

const profileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        ...globalDimensionStyles.topProfileButtonPadding,
    },
    verticalContainer: {
        marginHorizontal: screenDims.width * 0.1,
        flexDirection: "column",
        rowGap: 30,
        alignContent: "stretch",
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
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

export default profileScreenStyles;