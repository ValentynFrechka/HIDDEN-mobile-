import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_NAMES } from './src/constants/ui';
import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { height: 60 },
        })}
        initialRouteName={SCREEN_NAMES.HOME}
      >
        <Tab.Screen name={SCREEN_NAMES.SHOP} component={HomeScreen} /> {/* Mocked by HomeScreen for now */}
        <Tab.Screen name={SCREEN_NAMES.TRANSACTION} component={HomeScreen} /> {/* Mocked by HomeScreen for now */}
        <Tab.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={HomeScreen} /> {/* Mocked by HomeScreen for now */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
