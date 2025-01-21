import { Dimensions, StyleSheet } from "react-native";

const screenDims = Dimensions.get("screen");

const profileButtonSize = 40;
const profileButtonDimensions = {
    size: profileButtonSize,
    marginTop: profileButtonSize,
    marginBottom: profileButtonSize / 2,
    marginHorizontal: profileButtonSize / 1.5
}

const globalDimensionStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    profileButton: {
        height: profileButtonDimensions.size, 
        width: profileButtonDimensions.size, 
        marginTop: profileButtonDimensions.marginTop,
        marginBottom: profileButtonDimensions.marginBottom,
        marginHorizontal: profileButtonDimensions.marginHorizontal,
    },
    topProfileButtonPadding: {
        paddingTop: profileButtonDimensions.marginTop + profileButtonDimensions.marginBottom + profileButtonDimensions.size
    }
});

export default globalDimensionStyles;