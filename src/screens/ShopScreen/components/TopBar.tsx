import { StyleProp, TouchableOpacity, View, ViewStyle, Text } from "react-native";
import { useShopViewContext } from "../contexts/ShopViewContext";
import { EShopView } from "../enum/EShopView";
import dimensionStyles from "../styles/topBar.styles";

type TopBarProps = {
    style?: StyleProp<ViewStyle>
}

const TopBar: React.FC<TopBarProps> = ({ style }) => {
    const { shopView, setShopView } = useShopViewContext();

    const getBorderStyle = (view: EShopView) => {
        if (shopView === view)
            return dimensionStyles.activeBorder
        else return dimensionStyles.inactiveBorder;
    }

    return (
        <View style={style}>
            <View style={dimensionStyles.barRow}>
                <TouchableOpacity onPress={() => setShopView(EShopView.fertilizers)}>
                    <View  style={getBorderStyle(EShopView.fertilizers)}>
                        <Text style={dimensionStyles.text}>Fertilizers</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setShopView(EShopView.skins)}>
                    <View  style={getBorderStyle(EShopView.skins)}>
                        <Text style={dimensionStyles.text}>Skins</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShopView(EShopView.mySkins)}>
                    <View  style={getBorderStyle(EShopView.mySkins)}>
                        <Text style={dimensionStyles.text}>My skins</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default TopBar;