import { View, Text, TextInput, TouchableOpacity } from "react-native";
import transactionFormViewStyles from "./styles/transactionFormView.styles";
import { useTransactionFormValueContext } from "../../contexts/TransactionFormValuesContext";
import { ETransactionFormKeys } from "../../enum/ETransactionFormKeys";
import UserBalanceInfo from "../../components/UserBalanceInfo/UserBalanceInfo";

const TransactionFormView = () => {
    const { transactionFormValues, setTransactionFormValues, handleSubmit } = useTransactionFormValueContext();

    return (
        <View style={transactionFormViewStyles.verticalContainer}>
            <Text style={transactionFormViewStyles.title}>Send tokens</Text>

            <View style={transactionFormViewStyles.formContainer}>
                <View style={transactionFormViewStyles.fieldBalanceContainer}>
                    <View style={transactionFormViewStyles.inputFieldsContainer}>
                        <TextInput 
                            style={transactionFormViewStyles.inputField}
                            value={transactionFormValues.recipientId}
                            placeholder="Recipient ID"
                            placeholderTextColor={"rgba(255,255,255,0.5)"}
                            autoCorrect={false}
                            autoCapitalize="none"
                            inputMode="numeric"
                            onChangeText={(value) => setTransactionFormValues(ETransactionFormKeys.recipientId, value)}
                        />

                        <TextInput 
                            style={transactionFormViewStyles.inputField}
                            value={transactionFormValues.amount}
                            placeholder="Amount"
                            placeholderTextColor={"rgba(255,255,255,0.5)"}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => setTransactionFormValues(ETransactionFormKeys.amount, value)}
                        />
                    </View>

                    <UserBalanceInfo balance={320} />
                </View>

                <View style={transactionFormViewStyles.nextButtonContainer}>
                    <TouchableOpacity
                        style={transactionFormViewStyles.nextButton}
                        onPress={handleSubmit}
                    >
                        <Text style={transactionFormViewStyles.nextText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TransactionFormView;