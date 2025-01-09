import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_NAMES } from './src/constants/ui';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { ELoading } from "./src/enum/ELoading";
import LoadingScreen from "./src/screens/LoadingScreen/LoadingScreen";
import { View } from "react-native";
import TransactionScreen from "./src/screens/TransactionScreen/TransactionScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "./src/styles/global.styles";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loadingState, setLoadingState] = useState<ELoading>(ELoading.linking);

  if (loadingState === ELoading.done) {
    return (
      <NavigationContainer>
        <SafeAreaView style={globalStyles.safeAreaView}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { height: 60 },
            })}
            initialRouteName={SCREEN_NAMES.HOME}
          >
            <Tab.Screen name={SCREEN_NAMES.SHOP} component={HomeScreen} />
            <Tab.Screen name={SCREEN_NAMES.TRANSACTION} component={TransactionScreen} />
            <Tab.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
            <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={HomeScreen} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>    
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
