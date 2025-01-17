import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../../styles/global.dimension.styles";

const screenDims = Dimensions.get("screen");

const profileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(112, 21, 182)",
    },
    verticalContainer: {
        marginHorizontal: screenDims.width * 0.1,
        marginVertical: screenDims.width * 0.05,
        flexDirection: "column",
        rowGap: 30,
        alignContent: "stretch",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
    },
    optionsContainer: {
        flexDirection: "column",
        rowGap: 8,
    },
    optionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 14,
    },
    optionInfoSubcontainer: {
        flexDirection: "row",
        columnGap: 6
    },
    optionIcon: {
        width: 16,
        height: 16,
        backgroundColor: "red"
    },
    optionText: {
        fontSize: 14,
        color: "white",
    },
});

export default profileScreenStyles;