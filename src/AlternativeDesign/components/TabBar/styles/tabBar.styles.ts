import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const tabBarDimensions = {
    height: 76,
    borderRadius: 120,
    paddingHorizontal: 20,
};

const tabBarStyles = StyleSheet.create({
    tabBar: {
        flexDirection: "column", 
        justifyContent: "flex-end", 
        marginHorizontal: 8,
    },
    tabBarContainer: {
        position: "absolute",
        width: "100%",
        height: tabBarDimensions.height,
        borderRadius: tabBarDimensions.borderRadius,
        backgroundColor: "white",
    },
    tabBarRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: tabBarDimensions.paddingHorizontal,
    },
    tabBarShadow: {
        position: "absolute",
        zIndex: -1,
        width: "100%",
        height: tabBarDimensions.height,
        borderRadius: tabBarDimensions.borderRadius,
        backgroundColor: "rgba(170,170,170,1)",
        bottom: -6,
    },
});

export default tabBarStyles;