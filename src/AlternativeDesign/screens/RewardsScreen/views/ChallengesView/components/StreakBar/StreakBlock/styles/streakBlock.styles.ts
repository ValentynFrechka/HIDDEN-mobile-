import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const streakBlockColors = { 
    active: "rgba(241, 225, 255, 1)",
    activeBorder: "rgba(31, 7, 52, 1)",
    inactive: "rgba(48, 24, 69, 1)",
    inactiveBorder: "white",
    activeText: "black",
    inactiveText: "white",
};

const streakBlockDimensions = {
    blockSize: screenDims.width * 0.05,
    fireIconSize: 16,
}

const streakBlockStyles = StyleSheet.create({
    block: {
        paddingVertical: 6,
        width: screenDims.width * 0.09,
        flexDirection: "column",
        alignItems: "center",
        rowGap: 4,
        borderWidth: 1,
        borderRadius: 8,
    },
    dateLabel: {
        fontFamily: "Manrope-Regular",
        fontWeight: 800,
        fontSize: 10,
    },
    weekDayLabel: {
        fontFamily: "Manrope-Regular",
        fontWeight: 500,
        fontSize: 10,
    }
});

export { streakBlockColors, streakBlockDimensions, streakBlockStyles }