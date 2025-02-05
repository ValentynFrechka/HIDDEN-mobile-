import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "../styles/profileScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PROFILE_VIEWS } from "../constants/ui";
import { ProfileScreenIcons } from "../../../icons/ProfileScreenIcons";
import NavigationOption from "../components/NavigationOption/NavigationOption";

type ProfileStackParamList = {
    [key in typeof PROFILE_VIEWS[keyof typeof PROFILE_VIEWS]]: undefined;
};

const ProfileView = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

    return (
        <View style={profileScreenStyles.container}>
            <View style={profileScreenStyles.verticalContainer}>
                <Text style={profileScreenStyles.title}>My profile</Text>

                <View style={profileScreenStyles.optionsContainer}>
                    <NavigationOption 
                        Icon={ProfileScreenIcons.PreferencesIcon} 
                        optionText="My preferences"
                        target={PROFILE_VIEWS.USER_PREFERENCES}                    
                    />

                    <NavigationOption 
                        Icon={ProfileScreenIcons.NFCManagementIcon} 
                        optionText="NFC Management"
                        target={PROFILE_VIEWS.NFC_MANAGEMENT}                    
                    />
                    
                    <NavigationOption 
                        Icon={ProfileScreenIcons.SupportIcon} 
                        optionText="Support & Legal"
                        target={PROFILE_VIEWS.SUPPORT}                    
                    />
                </View>
            </View>
        </View>
    );
};

export default ProfileView;
