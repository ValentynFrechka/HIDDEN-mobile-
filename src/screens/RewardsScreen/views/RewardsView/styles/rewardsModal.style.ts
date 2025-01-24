import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const rewardsModalStyle = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5))",
        justifyContent: "center",
        alignItems: "center",
    },
    blur: {
        overflow: "hidden",
    },
    gradient: {
        width: screenDims.width * 0.6,
        borderWidth: 0.3,
        borderRadius: 12,
        borderColor: "white",
    },
    window: {
        width: "100%",
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: "center",
        padding: screenDims.width * 0.05
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 50,
        height: 50,
    },
    textContainer: {
        flexDirection: "column",
        rowGap: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    description: {
        fontSize: 14,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "500",
    },
    shareButton: {
        paddingVertical: screenDims.width * 0.02,
        paddingHorizontal: screenDims.width * 0.02,
        backgroundColor: "white",
        borderRadius: screenDims.width * 0.03,
    },
    shareText: {
        fontSize: 10,
        fontFamily: "Manrope-Regular",
        fontWeight: "800",
    },
    closeButtonContainer: {
        position: "absolute",
        alignSelf: "flex-end",
    },
    closeButton: {
        margin: 16,
        width: 24,
        height: 24,
    }
});

export default rewardsModalStyle;