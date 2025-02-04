import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const leaderboardViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: screenDims.width * 0.05,
        marginVertical: screenDims.height * 0.01,
    },
    title: {
        fontSize: 18,
        fontFamily: "Manrope-Regular",
        fontWeight: 600,
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 10,
        color: "white",
    },
});

export default leaderboardViewStyles;