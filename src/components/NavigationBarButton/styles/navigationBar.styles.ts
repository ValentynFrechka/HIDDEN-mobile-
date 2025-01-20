import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const profileButtonSize = 40;
const profileButtonDimensions = {
    size: profileButtonSize,
    marginTop: profileButtonSize,
    marginBottom: profileButtonSize / 2,
    marginHorizontal: profileButtonSize / 1.5
}

const navigationBarStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    navigationButton: {
        padding: 30
    }
});

export default navigationBarStyles;