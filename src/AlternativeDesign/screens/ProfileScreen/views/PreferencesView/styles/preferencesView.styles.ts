import { Dimensions, StyleSheet } from "react-native";
import globalDimensionStyles from "../../../../../../styles/global.dimension.styles";

const screenDims = Dimensions.get("screen");

const preferencesViewStyles = StyleSheet.create({
    dropdownPickerContainer: {
        height: 30,
        width: 140,
        alignItems: "flex-end",
    },
    dropdownPickerOpacity: {
        height: 30,
        width: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    dropdownPickerLabel: {
        color: "white"
    },
    dropdown: {
        borderWidth: 0.3,
        borderColor: "white"
    },
    listItemContainer: {
       height: 30
    },
    listItemLabel: {
        color: "white"
    }
});

export default preferencesViewStyles;