import { Dimensions, StyleSheet } from "react-native";

const navigationBarStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    navigationButton: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        width: 50,
        height: 50,
    }
});

export default navigationBarStyles;