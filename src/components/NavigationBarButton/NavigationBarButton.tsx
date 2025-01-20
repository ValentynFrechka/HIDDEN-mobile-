import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import navigationBarStyles from "./styles/navigationBar.styles";
import { ReactElement, SVGProps } from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAMES } from "../../constants/ui";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SvgProps } from "react-native-svg";

type RootStackParamList = {
    [key in typeof SCREEN_NAMES[keyof typeof SCREEN_NAMES]]: undefined;
}

type NavigationBarButtonProps = {
    style?: StyleProp<ViewStyle>,
    icon: React.FC<SvgProps>;
    screen: keyof RootStackParamList;
}

const NavigationBarButton: React.FC<NavigationBarButtonProps> = ({ style, icon: Icon, screen }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={[navigationBarStyles.container, style]}>
            <TouchableOpacity style={navigationBarStyles.navigationButton} onPress={() => navigation.navigate(screen)}>
                <Icon />
            </TouchableOpacity>
        </View>
    );
}

export default NavigationBarButton;