import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3))",
        justifyContent: "center",
        alignItems: "center",
    },
    window: {
        width: "70%",
        height: "60%",
        backgroundColor: "#fff",
        borderRadius: 5,
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
        alignSelf: "center"
    },
    dataLabel: {
        fontWeight: "500",
    },
    dataText: {
        fontSize: 14
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

export default modalStyles;