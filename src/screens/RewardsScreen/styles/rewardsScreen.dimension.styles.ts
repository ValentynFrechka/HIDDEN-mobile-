import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../../styles/global.dimension.styles";

const screenDims = Dimensions.get("screen");

const rewardsScreenDimensionStyles = StyleSheet.create({
    container: {
        ...globalDimensionStyles.container,
        backgroundColor: "rgb(112, 21, 182)"
    },
});

export default rewardsScreenDimensionStyles;