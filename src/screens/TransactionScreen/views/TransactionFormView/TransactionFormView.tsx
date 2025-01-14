import { View, Text, TextInput, Button } from "react-native";
import transactionFormViewStyles from "./styles/transactionFormView.styles";
import { useTransactionFormValueContext } from "../../contexts/TransactionFormValuesContext";
import { ETransactionFormKeys } from "../../enum/ETransactionFormKeys";

const TransactionFormView = () => {
    const { transactionFormValues, setTransactionFormValues, handleSubmit } = useTransactionFormValueContext();

    return (
        <View style={transactionFormViewStyles.verticalContainer}>
            <Text style={transactionFormViewStyles.title}>Send tokens</Text>

            <View style={transactionFormViewStyles.inputsContainer}>
                <TextInput 
                    style={transactionFormViewStyles.inputField}
                    value={transactionFormValues.recipientId}
                    onChangeText={(value) => setTransactionFormValues(ETransactionFormKeys.recipientId, value)}
                />

                <TextInput 
                    style={transactionFormViewStyles.inputField}
                    value={transactionFormValues.amount}
                    onChangeText={(value) => setTransactionFormValues(ETransactionFormKeys.amount, value)}
                />

                <View style={transactionFormViewStyles.balanceContainer}>
                    <View style={transactionFormViewStyles.balanceIcon}/>
                    <Text style={transactionFormViewStyles.balanceLabel}>Your balance: 240 tokens</Text>
                </View>
            </View>

            <View style={transactionFormViewStyles.nextButtonContainer}>
                <Button 
                    title="Next"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
};

export default TransactionFormView;