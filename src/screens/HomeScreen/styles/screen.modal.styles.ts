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
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: "white",
    },
    closeButtonContainer: {
        alignItems: "flex-end",
    },
    closeButton: {
        margin: 10,
        width: 25,
        height: 25,
        backgroundColor: "red",
    },
    title: {
        fontSize: 18,
        alignSelf: "center",
        color: "white",
    },
    dataLabel: {
        fontWeight: "500",
        color: "white",
    },
    dataText: {
        fontSize: 14,
        color: "white",
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