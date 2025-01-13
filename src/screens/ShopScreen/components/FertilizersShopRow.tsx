import { Text, TouchableOpacity, View } from "react-native";
import dimensionStyles from "../styles/fertilizersShopRow.styles";
import { useState } from "react";

type FertilizersShopRowProps = {
    iconPath: string;
    name: string;
    description?: string;
    price: number;
}

const FertilizersShopRow: React.FC<FertilizersShopRowProps> = ({ iconPath, name, description, price }) => {
    const [amount, setAmount] = useState(1);

    const getDescriptionComponent= () => {
       return description && <Text style={dimensionStyles.description}>{description}</Text>
    }

    const handleAmountDecrease = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    }

    const handleAmountIncrease = () => {
        setAmount(amount + 1);
    }

    const handleBuy = () => {
        // handle buy request
        setAmount(1);
    }

    return (
        <View style={dimensionStyles.roundedBlock}>
            <View style={dimensionStyles.horizontalContainer}>
                <View style={dimensionStyles.verticalBuyContainer}>
                    <View style={dimensionStyles.fertilizerContainer}>
                        <View style={dimensionStyles.fertilizerIcon}>

                        </View>

                        <Text style={dimensionStyles.fertilizerName}>{name}</Text>
                    </View>

                    <TouchableOpacity style={dimensionStyles.buyButton} onPress={handleBuy}>
                        <Text style={dimensionStyles.buyText}>Buy</Text>
                    </TouchableOpacity>
                </View>

                {getDescriptionComponent()}

                <View style={dimensionStyles.verticalAmountPriceContainer}>
                    <View style={dimensionStyles.horizontalAmountContainer}>
                        <TouchableOpacity onPress={handleAmountDecrease}>
                            <Text style={dimensionStyles.minusText}>-</Text>
                        </TouchableOpacity>

                        <Text style={dimensionStyles.amountText}>{amount}</Text>

                        <TouchableOpacity onPress={handleAmountIncrease}>
                            <Text style={dimensionStyles.plusText}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={dimensionStyles.horizontalPriceContainer}>
                        <View style={dimensionStyles.leafIcon}>

                        </View>

                        <Text style={dimensionStyles.priceText}>{price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default FertilizersShopRow;