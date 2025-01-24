import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");
const borderRadius = 120;

const secondaryButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(255,255,255,0.2)",
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

export default secondaryButtonStyles;