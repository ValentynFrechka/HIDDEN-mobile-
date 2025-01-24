import { View, Text, Button, TouchableOpacity } from "react-native"
import transactionConfirmationViewStyles from "./styles/transactionConfirmation.styles";
import { useTransactionFormValueContext } from "../../contexts/TransactionFormValuesContext";
import { useTransactionViewContext } from "../../contexts/TransactionViewContext";
import { ETransactionView } from "../../enum/ETransactionView";
import { ETransactionFormKeys } from "../../enum/ETransactionFormKeys";
import UserBalanceInfo from "../../components/UserBalanceInfo/UserBalanceInfo";
import PrimaryButton from "../../../../components/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../../components/buttons/SecondaryButton/SecondaryButton";


const TransactionConfirmationView = () => {
    const { transactionFormValues, setTransactionFormValues } = useTransactionFormValueContext();
    const { setTransactionView } = useTransactionViewContext();

    const handleBackPress = () => {
        setTransactionView(ETransactionView.form);
    }

    const clearFormFields = () => {
        setTransactionFormValues(ETransactionFormKeys.recipientId, "");
        setTransactionFormValues(ETransactionFormKeys.amount, "");
    }

    const handleSendPress = () => {
        // Perform transaction
        clearFormFields();
        setTransactionView(ETransactionView.success);

    }

    return (
        <View style={transactionConfirmationViewStyles.verticalContainer}>
            <Text style={transactionConfirmationViewStyles.title}>Send tokens</Text>

            <View style={transactionConfirmationViewStyles.infoContainer}>
                <View style={transactionConfirmationViewStyles.infoSubcontainer}>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>To:</Text>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>{transactionFormValues.recipientId}</Text>
                </View>

                <View style={transactionConfirmationViewStyles.infoSubcontainer}>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>Amount:</Text>
                    <Text style={transactionConfirmationViewStyles.infoLabel}>{transactionFormValues.amount} tokens</Text>
                </View>
            </View>

            <UserBalanceInfo balance={320} />

            <View style={transactionConfirmationViewStyles.buttonContainer}>
                <SecondaryButton 
                    style={transactionConfirmationViewStyles.button}
                    title="Back"
                    onPress={handleBackPress}
                />
                <PrimaryButton 
                    style={transactionConfirmationViewStyles.button}
                    title="Send" 
                    onPress={handleSendPress}
                />
            </View>
        </View>
    );
};

export default TransactionConfirmationView;