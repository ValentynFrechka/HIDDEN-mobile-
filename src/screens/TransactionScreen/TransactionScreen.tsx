import { View } from "react-native"
import TransactionFormView from "./views/TransactionFormView";
import TransactionConfirmationView from "./views/TransactionConfirmationView";
import TransactionSuccessfulView from "./views/TransactionSuccessfulView";
import dimensionStyles from "./styles/dimension.styles";


const TransactionScreen = () => {

    return (
        <View style={dimensionStyles.container}>
            <TransactionFormView></TransactionFormView>
        </View>
    )
}

export default TransactionScreen;