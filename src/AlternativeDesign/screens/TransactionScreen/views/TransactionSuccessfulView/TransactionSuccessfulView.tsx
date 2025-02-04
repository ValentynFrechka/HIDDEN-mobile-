import { Button, View, Text, TouchableOpacity } from "react-native"
import transactionSuccessfulViewStyles from "./styles/transactionSuccessfulView.styles";
import { useTransactionViewContext } from "../../contexts/TransactionViewContext";
import { ETransactionView } from "../../enum/ETransactionView";
import globalDimensionStyles from "../../../../../styles/global.dimension.styles";
import PrimaryButton from "../../../../components/buttons/PrimaryButton/PrimaryButton";
import { TransactionScreenIcons } from "../../../../icons/TransactionScreenIcons";


const TransactionSuccessfulView = () => {
    const { setTransactionView } = useTransactionViewContext();

    const handleReturnPress = () => {
        setTransactionView(ETransactionView.form);
    }

    return (
        <View style={transactionSuccessfulViewStyles.verticalContainer}>
            <View style={transactionSuccessfulViewStyles.successSubcontainer}>
                <TransactionScreenIcons.TransactionSuccessfulIcon size={transactionSuccessfulViewStyles.successIcon.height}/>
                
                <Text style={transactionSuccessfulViewStyles.title}>Transaction successful</Text>
            </View>

            <PrimaryButton 
                title="Return to main page"
                onPress={handleReturnPress}
                fontStyle={transactionSuccessfulViewStyles.returnText}
                style={transactionSuccessfulViewStyles.returnButton}
            />
        </View>
    );
};

export default TransactionSuccessfulView;