import { Button, View, Text } from "react-native"
import transactionSuccessfulViewStyles from "./styles/transactionSuccessfulView.styles";
import { useTransactionViewContext } from "../../contexts/TransactionViewContext";
import { ETransactionView } from "../../enum/ETransactionView";


const TransactionSuccessfulView = () => {
    const { setTransactionView } = useTransactionViewContext();

    const handleReturnPress = () => {
        setTransactionView(ETransactionView.form);
    }

    return (
        <View style={transactionSuccessfulViewStyles.verticalContainer}>
            <View style={transactionSuccessfulViewStyles.successSubcontainer}>
                <View style={transactionSuccessfulViewStyles.successIcon}/>
                <Text style={transactionSuccessfulViewStyles.title}>Transaction successful</Text>
            </View>

            <View style={transactionSuccessfulViewStyles.returnButton}>
                <Button 
                    title="Return to main page" 
                    onPress={handleReturnPress}
                />
            </View>
        </View>
    );
};

export default TransactionSuccessfulView;