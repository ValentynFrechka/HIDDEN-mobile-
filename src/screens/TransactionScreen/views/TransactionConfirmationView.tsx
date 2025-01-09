import { View, Text, Button, TouchableOpacity } from "react-native"
import dimensionStyles from "../styles/transactionConfirmation.styles";
import { useTransactionFormValueContext } from "../contexts/TransactionFormValuesContext";
import { useTransactionViewContext } from "../contexts/TransactionViewContext";
import { ETransactionView } from "../enum/ETransactionView";
import { ETransactionFormKeys } from "../enum/ETransactionFormKeys";


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
        <View style={dimensionStyles.verticalContainer}>
            <Text style={dimensionStyles.title}>Send tokens</Text>

            <View style={dimensionStyles.infoContainer}>
                <View style={dimensionStyles.infoSubcontainer}>
                    <Text style={dimensionStyles.infoLabel}>To:</Text>
                    <Text style={dimensionStyles.infoLabel}>{transactionFormValues.recipientId}</Text>
                </View>

                <View style={dimensionStyles.infoSubcontainer}>
                    <Text style={dimensionStyles.infoLabel}>Amount:</Text>
                    <Text style={dimensionStyles.infoLabel}>{transactionFormValues.amount} tokens</Text>
                </View>
            </View>

            <View style={dimensionStyles.buttonContainer}>
                <View style={dimensionStyles.buttonWrap}>
                    <Button 
                        title="Back"
                        onPress={handleBackPress}
                    />
                </View>
                <View style={dimensionStyles.buttonWrap}>
                    <Button 
                        title="Send" 
                        onPress={handleSendPress}
                    />
                </View>
            </View>
        </View>
    );
};

export default TransactionConfirmationView;