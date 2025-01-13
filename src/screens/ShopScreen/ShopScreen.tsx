import { useState } from "react";
import { View } from "react-native";
import FertilizersView from "./views/FertilizersView";
import { ShopViewContext, ShopViewContextType } from "./contexts/ShopViewContext";
import TopBar from "./components/TopBar";
import { EShopView } from "./enum/EShopView";
import dimensionStyles from "./styles/screen.dimension.styles";
import SkinsView from "./views/SkinsView";
import MySkinsView from "./views/MySkinsView";

const ShopScreen = () => {
    const [shopView, setShopView] = useState<EShopView>(EShopView.fertilizers);

    const shopViewContextValues: ShopViewContextType = {
        shopView: shopView,
        setShopView: setShopView
    }

    const renderCurrentView = () => {
        switch (shopView) {
            case EShopView.fertilizers:
                return <FertilizersView />;
            case EShopView.skins:
                return <SkinsView />;
            case EShopView.mySkins:
                return <MySkinsView />;
        }
    }

    return (
        <ShopViewContext.Provider value={shopViewContextValues}>
            <View style={dimensionStyles.container}>
                <TopBar style={dimensionStyles.topBar}/>

                {renderCurrentView()}
            </View>
        </ShopViewContext.Provider>
    )
};

export default ShopScreen;