import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "../styles/profileScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PROFILE_VIEWS } from "../constants/ui";
import { ProfileScreenIcons } from "../../../icons/ProfileScreen.icons";

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
                    <TouchableOpacity
                        style={profileScreenStyles.optionContainer}
                        onPress={() => navigation.navigate(PROFILE_VIEWS.USER_PREFERENCES)}
                    >
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}>
                                <ProfileScreenIcons.PreferencesIcon width={"100%"} height={"100%"} />
                            </View>

                            <Text style={profileScreenStyles.optionText}>
                                My preferences
                            </Text>
                        </View>

                        <View style={profileScreenStyles.navigationArrow}>
                            <ProfileScreenIcons.NavigationRightIcon width={"100%"} height={"100%"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}>
                                <ProfileScreenIcons.NFCManagementIcon width={"100%"} height={"100%"} />
                            </View>

                            <Text style={profileScreenStyles.optionText}>
                                NFC Management
                            </Text>
                        </View>

                        <View style={profileScreenStyles.navigationArrow}>
                            <ProfileScreenIcons.NavigationRightIcon width={"100%"} height={"100%"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={profileScreenStyles.optionContainer}>
                        <View
                            style={profileScreenStyles.optionInfoSubcontainer}
                        >
                            <View style={profileScreenStyles.optionIcon}>
                                <ProfileScreenIcons.SupportIcon width={"100%"} height={"100%"} />
                            </View>

                            <Text style={profileScreenStyles.optionText}>
                                Support & Legal
                            </Text>
                        </View>

                        <View style={profileScreenStyles.navigationArrow}>
                            <ProfileScreenIcons.NavigationRightIcon width={"100%"} height={"100%"} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfileView;
