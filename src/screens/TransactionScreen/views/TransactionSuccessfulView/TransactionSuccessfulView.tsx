import { Button, View, Text, TouchableOpacity } from "react-native"
import transactionSuccessfulViewStyles from "./styles/transactionSuccessfulView.styles";
import { useTransactionViewContext } from "../../contexts/TransactionViewContext";
import { ETransactionView } from "../../enum/ETransactionView";
import { TransactionScreenIcons } from "../../../../icons/TransactionScreen.icons";
import globalDimensionStyles from "../../../../styles/global.dimension.styles";
import PrimaryButton from "../../../../components/buttons/PrimaryButton/PrimaryButton";


const TransactionSuccessfulView = () => {
    const { setTransactionView } = useTransactionViewContext();

    const handleReturnPress = () => {
        setTransactionView(ETransactionView.form);
    }

    return (
        <View style={transactionSuccessfulViewStyles.verticalContainer}>
            <View style={transactionSuccessfulViewStyles.successSubcontainer}>
                <View style={transactionSuccessfulViewStyles.successIcon}>
                    <TransactionScreenIcons.TransactionSuccessfulIcon width={"100%"} height={"100%"}/>
                </View>
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