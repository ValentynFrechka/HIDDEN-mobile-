import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREEN_NAMES } from "./constants/ui";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { ELoading } from "./enum/ELoading";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import TransactionScreen from "./screens/TransactionScreen/TransactionScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "./styles/global.dimension.styles";
import RewardsScreen from "./screens/RewardsScreen/RewardsScreen";
import ShopScreen from "./screens/ShopScreen/ShopScreen";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { LinearGradient } from "react-native-linear-gradient";
import HomeIcon from "../assets/icons/navigationBar/home-icon.svg";
import ShopIcon from "../assets/icons/navigationBar/shop-icon.svg";
import TransactionIcon from "../assets/icons/navigationBar/transaction-icon.svg";
import RewardsIcon from "../assets/icons/navigationBar/rewards-icon.svg";
import NavigationBarButton from "./components/NavigationBarButton/NavigationBarButton";
import { FitImage } from "./components/FitImage/FitImage";

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
                style={{width: "100%", height: "100%", position: "absolute", zIndex: -1}}
            >
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
                                tabBarStyle: {
                                    height: 60,
                                    borderTopStartRadius: 15,
                                    borderTopEndRadius: 15,
                                    backgroundColor: "rgb(76, 54, 95)",
                                },
                                headerTransparent: true,
                                header: () => (
                                    <View style={{ alignItems: "flex-end", padding: 8 }}>
                                        <TouchableOpacity style={globalStyles.profileButton} onPress={() => navigation.navigate(SCREEN_NAMES.PROFILE)}>
                                            <FitImage src={require("../assets/icons/navigationBar/profile-icon.png")}/>
                                        </TouchableOpacity>
                                    </View>
                                ),
                                sceneStyle: { backgroundColor: "transparent" },
                            })}
                            initialRouteName={SCREEN_NAMES.HOME}
                        >
                            <Tab.Screen
                                name={SCREEN_NAMES.HOME}
                                component={HomeScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={HomeIcon}
                                            screen={SCREEN_NAMES.HOME}
                                        />
                                    )
                                }}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.SHOP}
                                component={ShopScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={ShopIcon}
                                            screen={SCREEN_NAMES.SHOP}
                                        />
                                    )
                                }}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.TRANSACTION}
                                component={TransactionScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={TransactionIcon}
                                            screen={SCREEN_NAMES.TRANSACTION}
                                        />
                                    )
                                }}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.REWARDS}
                                component={RewardsScreen}
                                options={{
                                    tabBarButton: () => (
                                        <NavigationBarButton
                                            icon={RewardsIcon}
                                            screen={SCREEN_NAMES.REWARDS}
                                        />
                                    )
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
                style={{flex: 1}}
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
