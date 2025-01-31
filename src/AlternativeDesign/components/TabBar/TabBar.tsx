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
import tabBarStyles from "./styles/tabBar.styles";

type TabBarProps = BottomTabBarProps & {
    state: BottomTabBarProps["state"];
};

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
    const iconRenderer = useTabBarIconRenderer();

    return (
        <View style={tabBarStyles.tabBar}>
            <View style={tabBarStyles.tabBarContainer}>
                <View style={tabBarStyles.tabBarRow}>
                    {state.routes.map((route, routeIndex) => {
                        const { options } = descriptors[route.key];
                        const isRouteActive = routeIndex === state.index;

                        const tabBarButton = options.tabBarButton;

                        if (tabBarButton && route.name !== SCREEN_NAMES.PROFILE) {
                            if (isRouteActive) {
                                return (
                                    <NavigationBarButton
                                        key={route.key}
                                        icon={() =>
                                            iconRenderer.renderActiveIcon(
                                                route.name
                                            )
                                        }
                                        screen={route.name}
                                    />
                                );
                            } else {
                                return (
                                    <View key={route.key} style={{flex: 1,}}>
                                        {tabBarButton({
                                            key: route.key,
                                            children: undefined,
                                        })}
                                    </View>
                                );
                            }
                        }
                    })}
                </View>

                {/* <ShadowView
                    style={tabBarStyles.tabBarShadow}
                    isReflectedLightEnabled={false}
                    shadowOffset={{ width: 0, height: 6 }}
                    shadowBlur={0}
                    shadowColor="rgba(170,170,170,1)"
                /> */}
                <View style={tabBarStyles.tabBarShadow} />
            </View>
        </View>
    );
};

export default TabBar;
