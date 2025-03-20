import { Alert, View, Image, Platform } from "react-native"
import TransactionFormView from "./views/TransactionFormView/TransactionFormView";
import TransactionConfirmationView from "./views/TransactionConfirmationView/TransactionConfirmationView";
import TransactionSuccessfulView from "./views/TransactionSuccessfulView/TransactionSuccessfulView";
import transactionScreenDimensionStyles from "./styles/screen.dimension.styles";
import { useState } from "react";
import { ETransactionView } from "./enum/ETransactionView";
import { TransactionFormValuesContext, TransactionFormValuesContextType } from "./contexts/TransactionFormValuesContext";
import { TransactionFormValues } from "./types/TransactionFormValues";
import { TransactionViewContext, TransactionViewContextType } from "./contexts/TransactionViewContext";
import Compose from "../../../components/Compose";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const TransactionScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();

    const [transactionView, setTransactionView] = useState<ETransactionView>(ETransactionView.form);
    const [transactionFormValues, setTransactionFormValuesState] = useState<TransactionFormValues>({
        recipientId: "",
        amount: "",
    });

    const transactionViewContextValue: TransactionViewContextType = {
        transactionView,
        setTransactionView
    }

    const setTransactionFormValues = (field: keyof TransactionFormValues, value: string) => {
        setTransactionFormValuesState((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        const { recipientId, amount } = transactionFormValues;

        if (!recipientId.trim() || !amount.trim()) {
            Alert.alert("Cannot proceed", "Please, fill both fields.");
            return;
        }

        if (isNaN(Number(amount)) || Number(amount) <= 0) {
            Alert.alert("Cannot proceed", "Amount must be a positive number.");
            return;
        }

        setTransactionView(ETransactionView.confirmation);
    }

    const transactionFormContextValue: TransactionFormValuesContextType = {
        transactionFormValues,
        setTransactionFormValues,
        handleSubmit
    };

    switch (transactionView) {
        case ETransactionView.form:
            return (
                <Compose components={[
                    { component: TransactionViewContext.Provider, props: { value: transactionViewContextValue } },
                    { component: TransactionFormValuesContext.Provider, props: { value: transactionFormContextValue } }
                ]}>
                    <View style={[transactionScreenDimensionStyles.container, {marginBottom: tabBarHeight}]}>
                        <TransactionFormView></TransactionFormView>
                    </View>

                    {Platform.OS === "android" &&
                    <Image 
                        source={require("../../../../assets/background/background-image.png")}
                        resizeMode="cover"
                        style={{position: "absolute", zIndex: -1, opacity: 0.7, alignSelf: "center", height: "100%",}}
                    />}
                </Compose>
            );
        case ETransactionView.confirmation:
            return (
                <Compose components={[
                    { component: TransactionViewContext.Provider, props: { value: transactionViewContextValue } },
                    { component: TransactionFormValuesContext.Provider, props: { value: transactionFormContextValue } }
                ]}>
                    <View style={[transactionScreenDimensionStyles.container, {marginBottom: tabBarHeight}]}>
                        <TransactionConfirmationView></TransactionConfirmationView>
                    </View>

                    {Platform.OS === "android" &&
                    <Image 
                        source={require("../../../../assets/background/background-image.png")}
                        resizeMode="cover"
                        style={{position: "absolute", zIndex: -1, opacity: 0.7, alignSelf: "center", height: "100%",}}
                    />}
                </Compose>
            );
        case ETransactionView.success:
            return (
                <TransactionViewContext.Provider value={transactionViewContextValue}>
                    <View style={[transactionScreenDimensionStyles.container, {marginBottom: tabBarHeight}]}>
                        <TransactionSuccessfulView></TransactionSuccessfulView>
                    </View>

                    {Platform.OS === "android" &&
                    <Image 
                        source={require("../../../../assets/background/background-image.png")}
                        resizeMode="cover"
                        style={{position: "absolute", zIndex: -1, opacity: 0.7, alignSelf: "center", height: "100%",}}
                    />}
                </TransactionViewContext.Provider>
            );
    }
}

export default TransactionScreen;