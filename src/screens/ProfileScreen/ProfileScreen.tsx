import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "./styles/profileScreen.styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileView from "./views/ProfileView";
import PreferencesView from "./views/PreferencesView";
import { PROFILE_VIEWS } from "./constants/ui";

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerTintColor: "white",
                headerTransparent: true,
                headerBackButtonDisplayMode: "generic",
                contentStyle: {backgroundColor: "transparent"},
                animation: "none",
            }}
            
        >
            <Stack.Screen name={PROFILE_VIEWS.USER_PROFILE} component={ProfileView} />
            <Stack.Screen name={PROFILE_VIEWS.USER_PREFERENCES} component={PreferencesView} />
        </Stack.Navigator>
    );
};

export default ProfileScreen;
