import { View, Text, ScrollView } from "react-native";
import dimensionStyles from "../styles/skinsView.styles";
import { TreeSkinsDataProvider } from "../providers/TreeSkinsDataProvider";
import TreeSkinBlock from "../components/TreeSkinBlock";

const SkinsView = () => {
    const skinsDataProvider = TreeSkinsDataProvider.instance;

    return (
        <View style={dimensionStyles.scrollContainer}>
            <ScrollView>
                <View style={dimensionStyles.container}>
                    <View style={dimensionStyles.twoColumnContainer}>
                        {skinsDataProvider.shopSkinsMock.map((skin) => (
                            <TreeSkinBlock 
                                name={skin.name}
                                price={skin.price}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default SkinsView;