import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../../../styles/global.dimension.styles";

const screenDims = Dimensions.get("screen");

const transactionScreenDimensionStyles = StyleSheet.create({
    container: {
        ...globalDimensionStyles.topProfileButtonPadding,
        flex: 1,
    },
});

export default transactionScreenDimensionStyles;