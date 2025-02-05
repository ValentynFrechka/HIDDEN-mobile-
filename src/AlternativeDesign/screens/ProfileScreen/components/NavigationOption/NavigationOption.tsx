import { TouchableOpacity, View, Text } from "react-native";
import { ProfileScreenIcons } from "../../../../icons/ProfileScreenIcons";
import { PROFILE_VIEWS } from "../../constants/ui";
import navigationOptionStyles from "./styles/navigationOption.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SvgSizeType } from "../../../../types/SvgSizeType";

type NavigationOptionProps<T extends Record<string, object | undefined>> = {
    Icon: React.FC<SvgSizeType>;
    optionText: string;
    target: keyof T;
    params?: T[keyof T];
};

const NavigationOption = <T extends Record<string, object | undefined>>({
     Icon, optionText, target, params
    }: NavigationOptionProps<T>) => 
{
    const navigation =
            useNavigation<NativeStackNavigationProp<T>>();

    const handleNavigation = () => {
        const emptyParams = {} as T[keyof T];
        
        if (params) navigation.navigate(target, params);
        else navigation.navigate(target, emptyParams);
    };

    return (
        <TouchableOpacity
            style={navigationOptionStyles.optionContainer}
            onPress={handleNavigation}
        >
            <View
                style={navigationOptionStyles.optionInfoSubcontainer}
            >
                <Icon size={navigationOptionStyles.optionIcon.height}/>

                <Text style={navigationOptionStyles.optionText}>
                    {optionText}
                </Text>
            </View>

            <ProfileScreenIcons.NavigationRightIcon size={navigationOptionStyles.navigationArrow.height} />
        </TouchableOpacity>
    );
};

export default NavigationOption;