import { Alert, View } from "react-native"
import TransactionFormView from "./views/TransactionFormView";
import TransactionConfirmationView from "./views/TransactionConfirmationView";
import TransactionSuccessfulView from "./views/TransactionSuccessfulView";
import dimensionStyles from "./styles/screen.dimension.styles";
import { useState } from "react";
import { ETransactionView } from "./enum/ETransactionView";
import { TransactionFormValuesContext, TransactionFormValuesContextType } from "./contexts/TransactionFormValuesContext";
import { TransactionFormValues } from "./types/TransactionFormValues";
import { TransactionViewContext, TransactionViewContextType } from "./contexts/TransactionViewContext";
import Compose from "../../components/Compose";

const TransactionScreen = () => {
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
                    <View style={dimensionStyles.container}>
                        <TransactionFormView></TransactionFormView>
                    </View>
                </Compose>
            );
        case ETransactionView.confirmation:
            return (
                <Compose components={[
                    { component: TransactionViewContext.Provider, props: { value: transactionViewContextValue } },
                    { component: TransactionFormValuesContext.Provider, props: { value: transactionFormContextValue } }
                ]}>
                    <View style={dimensionStyles.container}>
                        <TransactionConfirmationView></TransactionConfirmationView>
                    </View>
                </Compose>
            );
        case ETransactionView.success:
            return (
                <TransactionViewContext.Provider value={transactionViewContextValue}>
                    <View style={dimensionStyles.container}>
                        <TransactionSuccessfulView></TransactionSuccessfulView>
                    </View>
                </TransactionViewContext.Provider>
            );
    }
}

export default TransactionScreen;