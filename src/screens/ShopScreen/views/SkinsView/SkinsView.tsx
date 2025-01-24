import { View, Text, ScrollView } from "react-native";
import skinsViewStyles from "./styles/skinsView.styles";
import { TreeSkinsDataProvider } from "../../providers/TreeSkinsDataProvider";
import TreeSkinBlock from "../../components/TreeSkinBlock/TreeSkinBlock";
import { ShopScreenIcons } from "../../../../icons/ShopScreen.icons";
import { FitImage } from "../../../../components/FitImage/FitImage";
import UserBalanceInfo from "../../../TransactionScreen/components/UserBalanceInfo/UserBalanceInfo";

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
                                imageSrc={ShopScreenIcons.treeExampleImage}
                                price={skin.price}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            
            <UserBalanceInfo balance={320} style={skinsViewStyles.yourBalanceContainer} /> 
        </View>
    )
};

export default SkinsView;