import { View, Text } from "react-native";
import fertilizerStatusBlockStyles from "./styles/fertilizerStatusBlock.styles";

type FertilizersStatusBlockType = {
    iconPath: string;
    amount: number;
}

const FertilizerStatusBlock: React.FC<FertilizersStatusBlockType> = ({ iconPath, amount }) => {

    return (
        <View style={fertilizerStatusBlockStyles.roundedBlock}>
            <View style={fertilizerStatusBlockStyles.verticalContainer}>
                <View style={fertilizerStatusBlockStyles.icon}>

                </View>

                <Text style={fertilizerStatusBlockStyles.amountText}>x{amount}</Text>
            </View>
        </View>
    );
};

export default FertilizerStatusBlock;