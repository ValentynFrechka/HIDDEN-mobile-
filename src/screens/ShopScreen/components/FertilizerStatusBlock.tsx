import { View, Text } from "react-native";
import dimensionStyles from "../styles/fertilizerStatusBlock.styles";

type FertilizersStatusBlockType = {
    iconPath: string;
    amount: number;
}

const FertilizerStatusBlock: React.FC<FertilizersStatusBlockType> = ({ iconPath, amount }) => {

    return (
        <View style={dimensionStyles.roundedBlock}>
            <View style={dimensionStyles.verticalContainer}>
                <View style={dimensionStyles.icon}>

                </View>

                <Text style={dimensionStyles.amountText}>x{amount}</Text>
            </View>
        </View>
    );
};

export default FertilizerStatusBlock;