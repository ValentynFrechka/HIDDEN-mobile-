import { View, Text, TouchableOpacity, Image } from "react-native";
import profileScreenStyles from "./styles/profileScreen.styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileView from "./views/ProfileView";
import PreferencesView from "./views/PreferencesView/PreferencesView";
import { PROFILE_VIEWS } from "./constants/ui";
import NFCManagementView from "./views/NFCManagementView";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import SupportView from "./views/SupportView";

const Stack = createNativeStackNavigator();

const ProfileScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <>
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
            <Stack.Screen
                name={PROFILE_VIEWS.SUPPORT}
                component={SupportView}
            />
        </Stack.Navigator>
        
        <Image 
            source={require("../../../../assets/background/background-image.png")}
            resizeMode="cover"
            style={{position: "absolute", zIndex: -1, opacity: 0.7, alignSelf: "center", height: "100%",}}
        />
        </>
    );
};

export default ProfileScreen;
