import { registerRootComponent } from 'expo';
import './ether-setup.js';
import './custom-ether.js';

import { install } from "react-native-quick-crypto";
install();

import App from './src/App/App';
import AppV2 from './src/AlternativeDesign/App/AppV2';

const designVersion: number = +process.env.EXPO_PUBLIC_DESIGN_VERSION;

if (designVersion === 2) {
    registerRootComponent(AppV2)
}
else {
    registerRootComponent(App);
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

