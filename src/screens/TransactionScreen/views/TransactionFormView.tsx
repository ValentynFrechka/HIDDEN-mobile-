import { View, Text, TextInput, Button } from "react-native"
import dimensionStyles from "../styles/transactionForm.styles"


const TransactionFormView = () => {


    return (
        <View style={dimensionStyles.verticalContainer}>
            <Text style={dimensionStyles.title}>Send tokens</Text>

            <View style={dimensionStyles.inputsContainer}>
                <TextInput 
                    style={dimensionStyles.inputField}
                />

                <TextInput 
                    style={dimensionStyles.inputField}
                />

                <View style={dimensionStyles.balanceContainer}>
                    <View style={dimensionStyles.balanceIcon}/>
                    <Text style={dimensionStyles.balanceLabel}>Your balance: 240 tokens</Text>
                </View>
            </View>

            <View style={dimensionStyles.nextButtonContainer}>
                <Button title="Next"/>
            </View>
        </View>
    );
};

export default TransactionFormView;