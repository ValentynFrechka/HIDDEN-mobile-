import { View, Text, ImageSourcePropType } from "react-native";
import fertilizerStatusBlockStyles from "./styles/fertilizerStatusBlock.styles";
import { FitImage } from "../../../../../components/FitImage/FitImage";

type FertilizersStatusBlockType = {
    iconSrc: ImageSourcePropType;
    amount: number;
}

const FertilizerStatusBlock: React.FC<FertilizersStatusBlockType> = ({ iconSrc, amount }) => {

    return (
        <View style={fertilizerStatusBlockStyles.roundedBlock}>
            <View style={fertilizerStatusBlockStyles.verticalContainer}>
                <View style={fertilizerStatusBlockStyles.icon}>
                    <FitImage src={iconSrc} />
                </View>

                <Text style={fertilizerStatusBlockStyles.amountText}>x{amount}</Text>
            </View>
        </View>
    );
};

export default FertilizerStatusBlock;