import {
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import treeSkinBlockStyles from "./styles/treeSkinBlock.styles";
import { FitImage } from "../../../../../components/FitImage/FitImage";
import { ShopScreenIcons } from "../../../../icons/ShopScreenIcons";
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
                <View style={treeSkinBlockStyles.roundedBlock}>
                    <View style={treeSkinBlockStyles.verticalContainer}>
                        <View style={treeSkinBlockStyles.verticalSubcontainer}>
                            <View style={treeSkinBlockStyles.treeImage}>
                                <FitImage src={imageSrc} />
                            </View>

                            <View style={treeSkinBlockStyles.priceContainer}>
                                <ShopScreenIcons.LeafIcon size={treeSkinBlockStyles.leafIcon.height} />

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
        );
    } else {
        return (
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
        );
    }
};

export default TreeSkinBlock;
