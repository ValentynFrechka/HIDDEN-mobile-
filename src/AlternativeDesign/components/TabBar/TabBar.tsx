import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import type {
    BottomTabBarButtonProps,
    BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { ShadowView } from "react-native-inner-shadow";
import NavigationBarButton from "../../../components/NavigationBarButton/NavigationBarButton";
import { useTabBarIconRenderer } from "./util/iconRenderer";
import { SCREEN_NAMES } from "../../../constants/ui";

const S = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    },
});

type TabBarProps = BottomTabBarProps & {
    state: BottomTabBarProps["state"];
};

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
    const iconRenderer = useTabBarIconRenderer();

    return (
        <View style={{flexDirection: "column", justifyContent: "flex-end", marginHorizontal: 40,}}>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    height: 72,
                    borderRadius: 120,
                    backgroundColor: "white",
                }}
            >
                <View style={S.container}>
                    {state.routes.map((route, routeIndex) => {
                        const { options } = descriptors[route.key];
                        const isRouteActive = routeIndex === state.index;

                        const tabBarButton = options.tabBarButton;

                        if (tabBarButton) {
                            if (isRouteActive && route.name !== SCREEN_NAMES.PROFILE) {
                                return (
                                    <NavigationBarButton
                                        icon={() =>
                                            iconRenderer.renderActiveIcon(
                                                route.name
                                            )
                                        }
                                        screen={route.name}
                                    />
                                );
                            } else {
                                return tabBarButton({
                                    key: route.key,
                                    children: undefined,
                                });
                            }
                        }
                    })}
                </View>

                <ShadowView
                    style={{
                        position: "absolute",
                        zIndex: -1,
                        width: "100%",
                        paddingHorizontal: 24,
                        height: 72,
                        borderRadius: 120,
                    }}
                    isReflectedLightEnabled={false}
                    shadowOffset={{ width: 0, height: 6 }}
                    shadowBlur={0}
                    shadowColor="rgba(170,170,170,1)"
                />
            </View>
        </View>
    );
};

export default TabBar;
