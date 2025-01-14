import { View, Text, ScrollView } from "react-native";
import skinsViewStyles from "./styles/skinsView.styles";
import { TreeSkinsDataProvider } from "../../providers/TreeSkinsDataProvider";
import TreeSkinBlock from "../../components/TreeSkinBlock/TreeSkinBlock";

const SkinsView = () => {
    const skinsDataProvider = TreeSkinsDataProvider.instance;

    return (
        <View style={skinsViewStyles.scrollContainer}>
            <ScrollView>
                <View style={skinsViewStyles.container}>
                    <View style={skinsViewStyles.twoColumnContainer}>
                        {skinsDataProvider.shopSkinsMock.map((skin, index) => (
                            <TreeSkinBlock 
                                key={index}
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