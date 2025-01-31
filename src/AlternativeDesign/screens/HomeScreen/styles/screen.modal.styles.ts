import { StyleSheet } from "react-native";

const homeScreenModalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3))",
        justifyContent: "center",
        alignItems: "center",
    },
    window: {
        width: "70%",
        borderRadius: 12,
        borderWidth: 0.3,
        borderColor: "rgba(31,7,52,1)",
        backgroundColor: "white",
    },
    blur: {
        overflow: "hidden"
    },
    closeButtonContainer: {
        alignItems: "flex-end",
    },
    closeButton: {
        margin: 10,
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 18,
        alignSelf: "center",
    },
    dataLabel: {
        fontWeight: "500",
    },
    dataText: {
        fontSize: 14,
    },
    dataContainer: {
        padding: 30,
        flexDirection: "column",
        rowGap: 40,
    },
    dataContainerRow: {
        flexDirection: "column",
        rowGap: 10,
    },
});

export default homeScreenModalStyles;