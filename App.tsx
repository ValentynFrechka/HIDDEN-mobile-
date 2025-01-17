import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_NAMES } from './src/constants/ui';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { ELoading } from "./src/enum/ELoading";
import LoadingScreen from "./src/screens/LoadingScreen/LoadingScreen";
import TransactionScreen from "./src/screens/TransactionScreen/TransactionScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "./src/styles/global.dimension.styles";
import RewardsScreen from "./src/screens/RewardsScreen/RewardsScreen";
import ShopScreen from "./src/screens/ShopScreen/ShopScreen";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loadingState, setLoadingState] = useState<ELoading>(ELoading.linking);

  if (loadingState === ELoading.done) {
    return (
      <View style={{flex: 1, backgroundColor: "rgb(76, 54, 95)"}}>
      <NavigationContainer>
        <SafeAreaView style={globalStyles.safeAreaView}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarLabelStyle: { 
                fontSize: 12,
                color: "rgb(255,174,0)",
                boxShadow: "-1px 2px 7.8px 0px rgba(220, 120, 253, 0.2)"
              },
              tabBarLabel: ({focused}) => {
                const color = focused ? "rgb(255,174,0)" : "white";

                return (
                  <Text style={{
                    fontSize: 12,
                    color: color,
                    boxShadow: "-1px 2px 7.8px 0px rgba(220, 120, 253, 0.2)"
                  }}>
                    {route.name}
                  </Text>
                )
              },
              tabBarStyle: { 
                height: 60,
                borderTopStartRadius: 15,
                borderTopEndRadius: 15,
                backgroundColor: "rgb(76, 54, 95)"
              },
              headerShown: false,
            })}
            initialRouteName={SCREEN_NAMES.HOME}
          >
            <Tab.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
            <Tab.Screen name={SCREEN_NAMES.SHOP} component={ShopScreen} />
            <Tab.Screen name={SCREEN_NAMES.TRANSACTION} component={TransactionScreen} />
            <Tab.Screen name={SCREEN_NAMES.REWARDS} component={RewardsScreen} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>   
      </View> 
    );
  }
  else {
    return (
      <SafeAreaView style={globalStyles.safeAreaView}>
        <LoadingScreen initialLoadingState={loadingState} onLoadingStateChange={setLoadingState}></LoadingScreen>
      </SafeAreaView>
    );
  }
}
