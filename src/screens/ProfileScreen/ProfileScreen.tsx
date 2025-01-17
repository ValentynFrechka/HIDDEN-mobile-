import { View, Text, TouchableOpacity } from "react-native";
import profileScreenStyles from "./styles/profileScreen.styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileView from "./views/ProfileView";
import PreferencesView from "./views/PreferencesView";

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerTintColor: "white",
                headerTransparent: true,
                headerBackButtonDisplayMode: "generic",
            }}
        >
            <Stack.Screen name="Profile" component={ProfileView} />
            <Stack.Screen name="Preferences" component={PreferencesView} />
        </Stack.Navigator>
    );
};

export default ProfileScreen;
