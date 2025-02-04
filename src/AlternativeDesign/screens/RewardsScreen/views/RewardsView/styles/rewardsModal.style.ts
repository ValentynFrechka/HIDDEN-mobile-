import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const rewardsModalStyle = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5))",
        justifyContent: "center",
        alignItems: "center",
    },
    gradient: {
        width: screenDims.width * 0.6,
        borderWidth: 0.3,
        borderRadius: 12,
        borderColor: "white",
    },
    window: {
        width: screenDims.width * 0.6,
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 24,
        alignItems: "center",
        padding: screenDims.width * 0.05,
        backgroundColor: "white",
    },
    verticalContainer: {
        flexDirection: "column",
        rowGap: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 40,
        height: 40,
    },
    textContainer: {
        flexDirection: "column",
        rowGap: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "Manrope-Regular",
        fontWeight: "400",
    },
    shareButton: {
        paddingVertical: screenDims.width * 0.02,
        paddingHorizontal: screenDims.width * 0.1,
        borderRadius: 120,
        
    },
    shareSubcontainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    shareText: {
        color: "white",
        fontSize: 10,
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    shareIcon: {
        height: 10,
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