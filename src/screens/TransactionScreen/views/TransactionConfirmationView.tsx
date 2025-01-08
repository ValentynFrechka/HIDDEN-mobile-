import { View, Text, Button, TouchableOpacity } from "react-native"
import dimensionStyles from "../styles/transactionConfirmation.styles";


const TransactionConfirmationView = () => {


    return (
        <View style={dimensionStyles.verticalContainer}>
            <Text style={dimensionStyles.title}>Send tokens</Text>

            <View style={dimensionStyles.infoContainer}>
                <View style={dimensionStyles.infoSubcontainer}>
                    <Text style={dimensionStyles.infoLabel}>To:</Text>
                    <Text style={dimensionStyles.infoLabel}>id3727</Text>
                </View>

                <View style={dimensionStyles.infoSubcontainer}>
                    <Text style={dimensionStyles.infoLabel}>Amount:</Text>
                    <Text style={dimensionStyles.infoLabel}>3 tokens</Text>
                </View>
            </View>

            <View style={dimensionStyles.buttonContainer}>
                <View style={dimensionStyles.buttonWrap}>
                    <Button title="Back" />
                </View>
                <View style={dimensionStyles.buttonWrap}>
                    <Button title="Send" />
                </View>
            </View>
        </View>
    );
};

export default TransactionConfirmationView;