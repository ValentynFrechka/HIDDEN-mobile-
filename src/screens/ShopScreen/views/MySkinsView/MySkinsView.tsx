import { View, ScrollView, Button, Text, TouchableOpacity } from "react-native";
import mySkinsViewStyles from "./styles/mySkinsView.styles";
import TreeSkinBlock from "../../components/TreeSkinBlock/TreeSkinBlock";
import { TreeSkinsDataProvider } from "../../providers/TreeSkinsDataProvider";
import { useState } from "react";
import { EShopView } from "../../enum/EShopView";
import { useTabbedViewContext } from "../../../../components/TabbedView/TabbedViewContext";
import { EViewContext } from "../../../../enum/EViewContext";
import { ShopScreenIcons } from "../../../../icons/ShopScreen.icons";

const MySkinsView = () => {
    const skinsDataProvider = TreeSkinsDataProvider.instance;

    const [hasSkins, setHasSkins] = useState(true);
    const { setView } = useTabbedViewContext(EViewContext.shop);

    const handleBuySkinPress = () => {
        setView(EShopView.skins);
        setHasSkins(true); // Debug action to simulate user buys skins
    };

    if (hasSkins) {
        return (
            <View style={mySkinsViewStyles.scrollContainer}>
                <ScrollView>
                    <View style={mySkinsViewStyles.container}>
                        <View style={mySkinsViewStyles.twoColumnContainer}>
                            {skinsDataProvider.mySkinsMock.map(
                                (skin, index) => (
                                    <TreeSkinBlock
                                        key={index}
                                        imageSrc={
                                            ShopScreenIcons.treeExampleImage
                                        }
                                        name={skin.name}
                                    />
                                )
                            )}
                        </View>
                        <Button
                            /* Debug */ onPress={() => {
                                setHasSkins(false);
                            }}
                            title="Remove skins"
                        ></Button>
                    </View>
                </ScrollView>
            </View>
        );
    } else {
        return (
            <View style={mySkinsViewStyles.container}>
                <View style={mySkinsViewStyles.verticalSubcontainer}>
                    <View style={mySkinsViewStyles.infoSubcontainer}>
                        <View style={mySkinsViewStyles.sadfaceIcon}>
                            <ShopScreenIcons.SadfaceIcon width={"100%"} height={"100%"} />
                        </View>

                        <View style={mySkinsViewStyles.textSubcontainer}>
                            <Text style={mySkinsViewStyles.noSkinsText}>
                                Seems like you haven't bought any skins yet.
                            </Text>

                            <Text style={mySkinsViewStyles.noSkinsText}>
                                Go to 'Skins' and purchase your first!
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={mySkinsViewStyles.buySkinButton}
                        onPress={handleBuySkinPress}
                    >
                        <Text style={mySkinsViewStyles.buySkinText}>
                            Buy a skin
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

export default MySkinsView;
