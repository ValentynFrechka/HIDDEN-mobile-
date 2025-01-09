import { Button, View, Text } from "react-native"
import dimensionStyles from "../styles/transactionSuccessful.styles";
import { useTransactionViewContext } from "../contexts/TransactionViewContext";
import { ETransactionView } from "../enum/ETransactionView";


const TransactionSuccessfulView = () => {
    const { setTransactionView } = useTransactionViewContext();

    const handleReturnPress = () => {
        setTransactionView(ETransactionView.form);
    }

    return (
        <View style={dimensionStyles.verticalContainer}>
            <View style={dimensionStyles.successSubcontainer}>
                <View style={dimensionStyles.successIcon}/>
                <Text style={dimensionStyles.title}>Transaction successful</Text>
            </View>

            <View style={dimensionStyles.returnButton}>
                <Button 
                    title="Return to main page" 
                    onPress={handleReturnPress}
                />
            </View>
        </View>
    );
};

export default TransactionSuccessfulView;