import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_NAMES } from './src/constants/ui';
import HomeScreen from './src/screens/HomeScreen';
import { ELoading } from "./src/enum/ELoading";
import LoadingScreen from "./src/screens/LoadingScreen";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loadingState, setLoadingState] = useState<ELoading>(ELoading.linking);

  if (loadingState === ELoading.done) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { height: 60 },
          })}
          initialRouteName={SCREEN_NAMES.HOME}
        >
          <Tab.Screen name={SCREEN_NAMES.SHOP} component={HomeScreen} />
          <Tab.Screen name={SCREEN_NAMES.TRANSACTION} component={HomeScreen} />
          <Tab.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
          <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>    
    );
  }
  else {
    return (
      <LoadingScreen initialLoadingState={loadingState} onLoadingStateChange={setLoadingState}></LoadingScreen>
    );
  }
}
