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
import { Text, TouchableOpacity, View } from "react-native";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    const [loadingState, setLoadingState] = useState<ELoading>(
        ELoading.linking
    );

    if (loadingState === ELoading.done) {
        return (
            <View style={{ flex: 1, backgroundColor: "rgb(76, 54, 95)" }}>
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
                                    <View style={{ alignItems: "flex-end" }}>
                                        <TouchableOpacity
                                            style={globalStyles.profileButton}
                                            onPress={() => {
                                                navigation.navigate(
                                                    SCREEN_NAMES.PROFILE
                                                );
                                            }}
                                        />
                                    </View>
                                ),
                                sceneStyle: { backgroundColor: "transparent" },
                            })}
                            initialRouteName={SCREEN_NAMES.HOME}
                        >
                            <Tab.Screen
                                name={SCREEN_NAMES.HOME}
                                component={HomeScreen}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.SHOP}
                                component={ShopScreen}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.TRANSACTION}
                                component={TransactionScreen}
                            />
                            <Tab.Screen
                                name={SCREEN_NAMES.REWARDS}
                                component={RewardsScreen}
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
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1, backgroundColor: "rgb(76, 54, 95)" }}>
                <SafeAreaView style={globalStyles.safeAreaView}>
                    <LoadingScreen
                        initialLoadingState={loadingState}
                        onLoadingStateChange={setLoadingState}
                    ></LoadingScreen>
                </SafeAreaView>
            </View>
        );
    }
}
