import { Button, View, Text } from "react-native"
import dimensionStyles from "../styles/transactionSuccessful.styles";


const TransactionSuccessfulView = () => {


    return (
        <View style={dimensionStyles.verticalContainer}>
            <View style={dimensionStyles.successSubcontainer}>
                <View style={dimensionStyles.successIcon}/>
                <Text style={dimensionStyles.title}>Transaction successful</Text>
            </View>

            <View style={dimensionStyles.returnButton}>
                <Button title="Return to main page" />
            </View>
        </View>
    );
};

export default TransactionSuccessfulView;