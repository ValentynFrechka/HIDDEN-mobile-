import { useState } from "react";
import { View, Image, Platform } from "react-native";
import FertilizersView from "./views/FertilizersView/FertilizersView";
import shopScreenDimensionStyles from "./styles/screen.dimension.styles";
import SkinsView from "./views/SkinsView/SkinsView";
import MySkinsView from "./views/MySkinsView/MySkinsView";
import TabbedView from "../../../components/TabbedView/TabbedView";
import { EShopView } from "./enum/EShopView";
import { EViewContext } from "../../../enum/EViewContext";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const ShopScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <>
        <View style={[shopScreenDimensionStyles.container, {marginBottom: tabBarHeight}]}>
            <TabbedView 
                context={EViewContext.shop}
                fontColor="white" 
                views={{
                    [EShopView.fertilizers]: FertilizersView,
                    [EShopView.skins]: SkinsView,
                    [EShopView.mySkins]: MySkinsView,
                }} 
                rerenderViews={false}
            />
        </View>

        {Platform.OS === "android" &&
        <Image 
            source={require("../../../../assets/background/background-image.png")}
            resizeMode="cover"
            style={{position: "absolute", zIndex: -1, opacity: 0.7, alignSelf: "center", height: "100%",}}
        />}
        </>
    );
};

export default ShopScreen;