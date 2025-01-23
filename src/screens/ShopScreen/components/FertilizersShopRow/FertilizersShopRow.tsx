import {
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import fertilizersShopRowStyles from "./styles/fertilizersShopRow.styles";
import { useState } from "react";
import { ShopScreenIcons } from "../../../../icons/ShopScreen.icons";
import { FitImage } from "../../../../components/FitImage/FitImage";
import { BlurryGradient } from "../../../../components/BlurryGradient";

type FertilizersShopRowProps = {
    iconSrc: ImageSourcePropType;
    name: string;
    description?: string;
    price: number;
};

const FertilizersShopRow: React.FC<FertilizersShopRowProps> = ({
    iconSrc,
    name,
    description,
    price,
}) => {
    const [amount, setAmount] = useState(1);

    const getDescriptionComponent = () => {
        return (
            description && (
                <Text style={fertilizersShopRowStyles.description}>
                    {description}
                </Text>
            )
        );
    };

    const handleAmountDecrease = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const handleAmountIncrease = () => {
        setAmount(amount + 1);
    };

    const handleBuy = () => {
        // handle buy request
        setAmount(1);
    };

    return (
        <BlurryGradient style={fertilizersShopRowStyles.gradient}>
            <View style={fertilizersShopRowStyles.roundedBlock}>
                <View style={fertilizersShopRowStyles.horizontalContainer}>
                    <View style={fertilizersShopRowStyles.horizontalSubcontainer}>
                        <View style={fertilizersShopRowStyles.verticalBuyContainer}>
                            <View
                                style={fertilizersShopRowStyles.fertilizerContainer}
                            >
                                <View
                                    style={fertilizersShopRowStyles.fertilizerIcon}
                                >
                                    <FitImage src={iconSrc} />
                                </View>

                                <Text
                                    style={fertilizersShopRowStyles.fertilizerName}
                                >
                                    {name}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={fertilizersShopRowStyles.buyButton}
                                onPress={handleBuy}
                            >
                                <Text style={fertilizersShopRowStyles.buyText}>
                                    Buy
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {getDescriptionComponent()}
                    </View>

                    <View
                        style={
                            fertilizersShopRowStyles.verticalAmountPriceContainer
                        }
                    >
                        <View
                            style={
                                fertilizersShopRowStyles.horizontalAmountContainer
                            }
                        >
                            <TouchableOpacity onPress={handleAmountDecrease} style={fertilizersShopRowStyles.amountButton}>
                                <View style={fertilizersShopRowStyles.minusIcon}>
                                    <ShopScreenIcons.MinusIcon width={"100%"} height={"100%"} />
                                </View>
                            </TouchableOpacity>

                            <Text style={fertilizersShopRowStyles.amountText}>
                                {amount}
                            </Text>

                            <TouchableOpacity onPress={handleAmountIncrease} style={fertilizersShopRowStyles.amountButton}>
                                <View style={fertilizersShopRowStyles.plusIcon}>
                                    <ShopScreenIcons.PlusIcon width={"100%"} height={"100%"} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={
                                fertilizersShopRowStyles.horizontalPriceContainer
                            }
                        >
                            <View style={fertilizersShopRowStyles.leafIcon}>
                                <FitImage src={ShopScreenIcons.leafIcon} />
                            </View>

                            <Text style={fertilizersShopRowStyles.priceText}>
                                {price}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </BlurryGradient>
    );
};

export default FertilizersShopRow;
