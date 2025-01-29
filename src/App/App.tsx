import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREEN_NAMES } from "../constants/ui";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { ELoading } from "../enum/ELoading";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import TransactionScreen from "../screens/TransactionScreen/TransactionScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/global.dimension.styles";
import RewardsScreen from "../screens/RewardsScreen/RewardsScreen";
import ShopScreen from "../screens/ShopScreen/ShopScreen";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { LinearGradient } from "react-native-linear-gradient";
import NavigationBarButton from "../components/NavigationBarButton/NavigationBarButton";
import { FitImage } from "../components/FitImage/FitImage";
import { StatusBar } from "expo-status-bar";
import appStyles from "./styles/app.styles";
import { AppIcons } from "../icons/App.icons";

const Tab = createBottomTabNavigator();

export default function App() {
    const [loadingState, setLoadingState] = useState<ELoading>(
        ELoading.linking
    );

    if (loadingState === ELoading.done) {
        return (
            <LinearGradient
                colors={["rgba(54, 33, 94, 1)", "rgba(5, 1, 18, 1)"]}
                start={{ x: 0.0181, y: 1 }}
                end={{ x: 0.8667, y: 0 }}
                style={appStyles.backgroundGradient}
            >
                <StatusBar backgroundColor="transparent" style="inverted" />
                <NavigationContainer>
                    <SafeAreaView style={globalStyles.safeAreaView}>
                        <Tab.Navigator
                            screenOptions={({ route, navigation }) => ({
                                tabBarLabel: ({ focused }) => {
                                    const color =
                                        route.name === SCREEN_NAMES.HOME
                                            ? "rgb(255,174,0)"
                                            : "white";

                                    return (
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: color,
                                                boxShadow:
                                                    "-1px 2px 7.8px 0px rgba(220, 120, 253, 0.2)",
                                            }}
                                        >
                                            {route.name}
                                        </Text>
                                    );
                                },
                                tabBarStyle: appStyles.tabBarStyle,
                                headerTransparent: true,
                                header: () => (
                                    <View
                                        style={appStyles.header}
                                    >
                                        <TouchableOpacity
                                            style={globalStyles.profileButton}
                                            onPress={() =>
                                                navigation.navigate(
                                                    SCREEN_NAMES.PROFILE
                                                )
                                            }
                                        >
                                            <FitImage
                                                src={AppIcons.profileIcon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ),
                                sceneStyle: appStyles.scene,
                            })}
                            initialRouteName={SCREEN_NAMES.HOME}
                        >
                            <Tab.Screen
                                name={SCREEN_NAMES.HOME}
                                component={HomeScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={AppIcons.HomeIcon}
                                            screen={SCREEN_NAMES.HOME}
                                        />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.SHOP}
                                component={ShopScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={AppIcons.ShopIcon}
                                            screen={SCREEN_NAMES.SHOP}
                                        />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.TRANSACTION}
                                component={TransactionScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={AppIcons.TransactionIcon}
                                            screen={SCREEN_NAMES.TRANSACTION}
                                        />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.REWARDS}
                                component={RewardsScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={AppIcons.RewardsIcon}
                                            screen={SCREEN_NAMES.REWARDS}
                                        />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.PROFILE}
                                component={ProfileScreen}
                                options={{
                                    tabBarButton: () => null,
                                    tabBarItemStyle: { position: "absolute" },
                                }}
                            />
                        </Tab.Navigator>
                    </SafeAreaView>
                </NavigationContainer>
            </LinearGradient>
        );
    } else {
        return (
            <LinearGradient
                colors={["rgba(31, 4, 54, 1)", "rgba(124, 87, 156, 1)"]}
                start={{ x: 0.23, y: 1 }}
                end={{ x: 1.04, y: 0 }}
                style={appStyles.loadingScreenGradient}
            >
                <SafeAreaView style={globalStyles.safeAreaView}>
                    <LoadingScreen
                        initialLoadingState={loadingState}
                        onLoadingStateChange={setLoadingState}
                    ></LoadingScreen>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}
