import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const rewardsModalStyle = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5))",
        justifyContent: "center",
        alignItems: "center",
    },
    window: {
        width: screenDims.width * 0.6,
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "rgba(133, 90, 171, 0.94)",
        borderRadius: 5,
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
        backgroundColor: "red",
    },
    textContainer: {
        flexDirection: "column",
        rowGap: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 21,
        color: "white",
        textAlign: "center",
    },
    description: {
        fontSize: 14,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
    },
    shareButton: {
        paddingVertical: screenDims.width * 0.02,
        paddingHorizontal: screenDims.width * 0.02,
        backgroundColor: "rgb(220, 120, 253)",
        borderRadius: screenDims.width * 0.03,
    },
    shareText: {
        fontSize: 12,
        fontWeight: "bold"
    },
    closeButtonContainer: {
        position: "absolute",
        alignSelf: "flex-end",
    },
    closeButton: {
        margin: 16,
        backgroundColor: "red",
        width: 20,
        height: 20,
    }
});

export default rewardsModalStyle;