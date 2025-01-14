import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const skinsViewStyles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        alignItems: "center",
        paddingBottom: screenDims.height * 0.02,
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: screenDims.height * 0.02,
    },
    twoColumnContainer: {
        flexDirection: "row",
        columnGap: screenDims.width * 0.05,
        rowGap: screenDims.width * 0.05,
        justifyContent: "center",
        flexWrap: "wrap",
        width: screenDims.width * 0.8
    }
    
});

export default skinsViewStyles;