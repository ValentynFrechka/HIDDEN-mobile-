import { ImageSourcePropType, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import navigationBarStyles from "./styles/navigationBar.styles";
import { ReactElement, SVGProps } from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_NAMES } from "../../constants/ui";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SvgProps } from "react-native-svg";
import { FitImage } from "../FitImage/FitImage";

type RootStackParamList = {
    [key in typeof SCREEN_NAMES[keyof typeof SCREEN_NAMES]]: undefined;
}

type NavigationBarButtonProps = {
    style?: StyleProp<ViewStyle>,
    icon?: React.FC<SvgProps> | React.FC;
    imageSrc?: ImageSourcePropType;
    screen: keyof RootStackParamList;
}

const NavigationBarButton: React.FC<NavigationBarButtonProps> = ({ style, icon: Icon, imageSrc, screen }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const renderIcon = () => {
        if (Icon) {
            return (<Icon />);
        }
        else if (imageSrc) {
            return (<FitImage src={imageSrc} />)
        }
    }

    return (
        <View style={[navigationBarStyles.container, style]}>
            <TouchableOpacity style={navigationBarStyles.navigationButton} onPress={() => navigation.navigate(screen)}>
                {renderIcon()}
            </TouchableOpacity>
        </View>
    );
}

export default NavigationBarButton;