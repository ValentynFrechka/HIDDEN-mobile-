import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "./styles/profileScreen.styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileView from "./views/ProfileView";
import PreferencesView from "./views/PreferencesView/PreferencesView";
import { PROFILE_VIEWS } from "./constants/ui";
import NFCManagementView from "./views/NFCManagementView";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerTintColor: "white",
                headerTransparent: true,
                headerBackButtonDisplayMode: "generic",
                contentStyle: { backgroundColor: "transparent", marginBottom: tabBarHeight },
                animation: "none",
            }}
        >
            <Stack.Screen
                name={PROFILE_VIEWS.USER_PROFILE}
                component={ProfileView}
            />
            <Stack.Screen
                name={PROFILE_VIEWS.USER_PREFERENCES}
                component={PreferencesView}
            />
            <Stack.Screen
                name={PROFILE_VIEWS.NFC_MANAGEMENT}
                component={NFCManagementView}
            />
        </Stack.Navigator>
    );
};

export default ProfileScreen;
