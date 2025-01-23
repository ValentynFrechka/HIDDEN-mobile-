import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../styles/global.dimension.styles";

const screenDims = Dimensions.get("screen");

const tabbedViewStyles = StyleSheet.create({
    container: {
        ...globalDimensionStyles.container
    },
    tabsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: screenDims.width * 0.1,
        marginVertical: screenDims.width * 0.04,
    },
    activeBorder: {
        paddingBottom: 3,
        borderBottomWidth: 2,
        borderColor: "white"
    },
    inactiveBorder: {
        paddingBottom: 3,
    },
    tabText: {
        fontSize: 16,
        color: "white",
        fontFamily: "Manrope-Regular",
        fontWeight: "600",
    },
    contentContainer: {
        flex: 1,
    },
});

export default tabbedViewStyles;