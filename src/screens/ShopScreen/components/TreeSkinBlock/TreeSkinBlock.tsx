import {
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import treeSkinBlockStyles from "./styles/treeSkinBlock.styles";
import { BlurryGradient } from "../../../../components/BlurryGradient";
import { FitImage } from "../../../../components/FitImage/FitImage";
import { ShopScreenIcons } from "../../../../icons/ShopScreen.icons";
import PrimaryButton from "../../../../components/buttons/PrimaryButton/PrimaryButton";

type TreeSkinBlockProps = {
    name: string;
    imageSrc: ImageSourcePropType;
    price?: number;
};

const TreeSkinBlock: React.FC<TreeSkinBlockProps> = ({
    name,
    imageSrc,
    price,
}) => {
    if (price) {
        return (
            <BlurryGradient style={treeSkinBlockStyles.gradient}>
                <View style={treeSkinBlockStyles.roundedBlock}>
                    <View style={treeSkinBlockStyles.verticalContainer}>
                        <View style={treeSkinBlockStyles.verticalSubcontainer}>
                            <View style={treeSkinBlockStyles.treeImage}>
                                <FitImage src={imageSrc} />
                            </View>

                            <View style={treeSkinBlockStyles.priceContainer}>
                                <View style={treeSkinBlockStyles.leafIcon}>
                                    <FitImage src={ShopScreenIcons.leafIcon} />
                                </View>

                                <Text style={treeSkinBlockStyles.priceText}>
                                    {price}
                                </Text>
                            </View>
                        </View>

                        <View style={treeSkinBlockStyles.verticalSubcontainer}>
                            <Text style={treeSkinBlockStyles.nameText}>
                                {name}
                            </Text>

                            <PrimaryButton
                                title="Buy"
                                style={treeSkinBlockStyles.button}
                                fontStyle={treeSkinBlockStyles.buttonText}
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                </View>
            </BlurryGradient>
        );
    } else {
        return (
            <BlurryGradient style={treeSkinBlockStyles.gradient}>
                <View style={treeSkinBlockStyles.roundedBlock}>
                    <View style={treeSkinBlockStyles.verticalContainer}>
                        <View style={treeSkinBlockStyles.treeImage}>
                            <FitImage src={imageSrc} />
                        </View>

                        <View style={treeSkinBlockStyles.verticalSubcontainer}>
                            <Text style={treeSkinBlockStyles.nameText}>
                                {name}
                            </Text>

                            <PrimaryButton
                                title="Wear"
                                style={treeSkinBlockStyles.button}
                                fontStyle={treeSkinBlockStyles.buttonText}
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                </View>
            </BlurryGradient>
        );
    }
};

export default TreeSkinBlock;
