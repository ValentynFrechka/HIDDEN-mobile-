import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const dimensionStyles = StyleSheet.create({
    verticalContainer: {
        flex: 1,
        marginTop: screenDims.height * 0.1,
        marginHorizontal: screenDims.width * 0.15,
        flexDirection: "column",
        rowGap: 30,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    inputsContainer: {
        alignSelf: "stretch",
        flexDirection: "column",
        rowGap: 20,
        alignItems: "stretch",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
    },
    inputField: {
        borderWidth: 1,
        borderColor: "rgb(0,0,0)",
        borderRadius: 2,
        padding: 12,
        fontSize: 18,
        textAlignVertical: "center"
    },
    balanceContainer: {
        alignSelf: "stretch",
        flexDirection: "row",
        columnGap: 5,
        alignItems: "center",
    },
    balanceIcon: {
        width: 15,
        height: 15,
        backgroundColor: "red"
    },
    balanceLabel: {
        fontSize: 14,
        textAlignVertical: "center",
    },
    nextButtonContainer: {
        alignSelf: "stretch"
    },
});

export default dimensionStyles;