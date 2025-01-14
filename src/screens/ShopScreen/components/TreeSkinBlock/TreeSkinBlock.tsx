import { Text, TouchableOpacity, View } from "react-native"
import treeSkinBlockStyles from "./styles/treeSkinBlock.styles";

type TreeSkinBlockProps = {
    name: string;
    price?: number;
}

const TreeSkinBlock: React.FC<TreeSkinBlockProps> = ({ name, price }) => {

    if (price) {
        return (
            <View style={treeSkinBlockStyles.roundedBlock}>
                <View style={treeSkinBlockStyles.verticalContainer}>
                    <View style={treeSkinBlockStyles.verticalSubcontainer}>
                        <View style={treeSkinBlockStyles.treeImage}>

                        </View>

                        <View style={treeSkinBlockStyles.priceContainer}>
                            <View style={treeSkinBlockStyles.leafIcon}>

                            </View>

                            <Text style={treeSkinBlockStyles.priceText}>{price}</Text>
                        </View>
                    </View>

                    <View style={treeSkinBlockStyles.verticalSubcontainer}>
                        <Text style={treeSkinBlockStyles.nameText}>{name}</Text>

                        <TouchableOpacity style={treeSkinBlockStyles.button}>
                            <Text style={treeSkinBlockStyles.buttonText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={treeSkinBlockStyles.roundedBlock}>
                <View style={treeSkinBlockStyles.verticalContainer}>
                    <View style={treeSkinBlockStyles.treeImage}>

                    </View>

                    <View style={treeSkinBlockStyles.verticalSubcontainer}>
                        <Text style={treeSkinBlockStyles.nameText}>{name}</Text>

                        <TouchableOpacity style={treeSkinBlockStyles.button}>
                            <Text style={treeSkinBlockStyles.buttonText}>Wear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

export default TreeSkinBlock;