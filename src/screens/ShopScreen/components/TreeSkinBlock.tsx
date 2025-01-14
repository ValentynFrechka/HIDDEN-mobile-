import { Text, TouchableOpacity, View } from "react-native"
import dimensionStyles from "../styles/treeSkinBlock.styles";

type TreeSkinBlockProps = {
    name: string;
    price?: number;
}

const TreeSkinBlock: React.FC<TreeSkinBlockProps> = ({ name, price }) => {

    if (price) {
        return (
            <View style={dimensionStyles.roundedBlock}>
                <View style={dimensionStyles.verticalContainer}>
                    <View style={dimensionStyles.verticalSubcontainer}>
                        <View style={dimensionStyles.treeImage}>

                        </View>

                        <View style={dimensionStyles.priceContainer}>
                            <View style={dimensionStyles.leafIcon}>

                            </View>

                            <Text style={dimensionStyles.priceText}>{price}</Text>
                        </View>
                    </View>

                    <View style={dimensionStyles.verticalSubcontainer}>
                        <Text style={dimensionStyles.nameText}>{name}</Text>

                        <TouchableOpacity style={dimensionStyles.button}>
                            <Text style={dimensionStyles.buttonText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={dimensionStyles.roundedBlock}>
                <View style={dimensionStyles.verticalContainer}>
                    <View style={dimensionStyles.treeImage}>

                    </View>

                    <View style={dimensionStyles.verticalSubcontainer}>
                        <Text style={dimensionStyles.nameText}>{name}</Text>

                        <TouchableOpacity style={dimensionStyles.button}>
                            <Text style={dimensionStyles.buttonText}>Wear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

export default TreeSkinBlock;