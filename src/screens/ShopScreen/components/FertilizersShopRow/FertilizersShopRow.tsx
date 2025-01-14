import { Text, TouchableOpacity, View } from "react-native";
import fertilizersShopRowStyles from "./styles/fertilizersShopRow.styles";
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
       return description && <Text style={fertilizersShopRowStyles.description}>{description}</Text>
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
        <View style={fertilizersShopRowStyles.roundedBlock}>
            <View style={fertilizersShopRowStyles.horizontalContainer}>
                <View style={fertilizersShopRowStyles.horizontalSubcontainer}>
                    <View style={fertilizersShopRowStyles.verticalBuyContainer}>
                        <View style={fertilizersShopRowStyles.fertilizerContainer}>
                            <View style={fertilizersShopRowStyles.fertilizerIcon}>

                            </View>

                            <Text style={fertilizersShopRowStyles.fertilizerName}>{name}</Text>
                        </View>

                        <TouchableOpacity style={fertilizersShopRowStyles.buyButton} onPress={handleBuy}>
                            <Text style={fertilizersShopRowStyles.buyText}>Buy</Text>
                        </TouchableOpacity>
                    </View>

                    {getDescriptionComponent()}
                </View>

                <View style={fertilizersShopRowStyles.verticalAmountPriceContainer}>
                    <View style={fertilizersShopRowStyles.horizontalAmountContainer}>
                        <TouchableOpacity onPress={handleAmountDecrease}>
                            <Text style={fertilizersShopRowStyles.minusText}>-</Text>
                        </TouchableOpacity>

                        <Text style={fertilizersShopRowStyles.amountText}>{amount}</Text>

                        <TouchableOpacity onPress={handleAmountIncrease}>
                            <Text style={fertilizersShopRowStyles.plusText}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={fertilizersShopRowStyles.horizontalPriceContainer}>
                        <View style={fertilizersShopRowStyles.leafIcon}>

                        </View>

                        <Text style={fertilizersShopRowStyles.priceText}>{price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default FertilizersShopRow;