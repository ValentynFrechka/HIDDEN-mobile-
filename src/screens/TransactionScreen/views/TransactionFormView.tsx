import { View, Text, TextInput, Button } from "react-native";
import dimensionStyles from "../styles/transactionForm.styles";
import { useTransactionFormValueContext } from "../contexts/TransactionFormValuesContext";
import { ETransactionFormKeys } from "../enum/ETransactionFormKeys";
import { useTransactionViewContext } from "../contexts/TransactionViewContext";

const TransactionFormView = () => {
    const { transactionFormValues, setTransactionFormValues, handleSubmit } = useTransactionFormValueContext();

    return (
        <View style={dimensionStyles.verticalContainer}>
            <Text style={dimensionStyles.title}>Send tokens</Text>

            <View style={dimensionStyles.inputsContainer}>
                <TextInput 
                    style={dimensionStyles.inputField}
                    value={transactionFormValues.recipientId}
                    onChangeText={(value) => setTransactionFormValues(ETransactionFormKeys.recipientId, value)}
                />

                <TextInput 
                    style={dimensionStyles.inputField}
                    value={transactionFormValues.amount}
                    onChangeText={(value) => setTransactionFormValues(ETransactionFormKeys.amount, value)}
                />

                <View style={dimensionStyles.balanceContainer}>
                    <View style={dimensionStyles.balanceIcon}/>
                    <Text style={dimensionStyles.balanceLabel}>Your balance: 240 tokens</Text>
                </View>
            </View>

            <View style={dimensionStyles.nextButtonContainer}>
                <Button 
                    title="Next"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
};

export default TransactionFormView;