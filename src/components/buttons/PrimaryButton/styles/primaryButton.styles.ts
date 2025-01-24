import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");
const borderRadius = 120;

const primaryButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
    },
    shadowView: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: borderRadius,
        alignItems: "center",
    },
    text: {
        fontSize: 10,
        fontFamily: "Manrope-Regular",
        fontWeight: "800",
    },
});

export default primaryButtonStyles;