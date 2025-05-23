import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const transactionFormViewStyles = StyleSheet.create({
    verticalContainer: {
        flex: 1,
        marginHorizontal: screenDims.width * 0.21,
        marginVertical: screenDims.height * 0.04,
        flexDirection: "column",
        rowGap: 40,
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    formContainer: {
        flexDirection: "column",
        rowGap: 20
    },
    fieldBalanceContainer: {
        alignSelf: "stretch",
        flexDirection: "column",
        rowGap: 12,
        alignItems: "stretch",
    },
    inputFieldsContainer: {
        alignSelf: "stretch",
        flexDirection: "column",
        rowGap: 16,
        alignItems: "stretch",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    inputField: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 120,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        fontFamily: "Manrope-Regular",
        fontWeight: 500,
        textAlignVertical: "center",
        color: "white",
    },
    nextButton: {
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderRadius: 120,
    },
    nextText: {
        fontSize: 14,
        fontFamily: "Manrope-Regular",
        fontWeight: "600"
    },
});

export default transactionFormViewStyles;