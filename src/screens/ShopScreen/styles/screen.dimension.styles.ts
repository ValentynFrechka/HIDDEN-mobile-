import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../../styles/global.dimension.styles";

const screenDims = Dimensions.get("screen");

const shopScreenDimensionStyles = StyleSheet.create({
    container: {
        ...globalDimensionStyles.container,
        ...globalDimensionStyles.topProfileButtonPadding,
    },
    topBar: {
        marginHorizontal: screenDims.width * 0.1,
        marginVertical: screenDims.height * 0.02,
    }
});

export default shopScreenDimensionStyles;