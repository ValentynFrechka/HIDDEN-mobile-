# iLeaf-mobile

## How to launch development build on mobile

### 1. Clone repo
```bash
git clone https://github.com/barkasdev/iLeaf-mobile.git
cd iLeaf-mobile
npm install
```

### 2. Launch expo local server
```bash
npx expo start
```

### 3. Install prebuilt app on your device/simulator
### Android:
Install app dev build from Expo:

https://expo.dev/accounts/donniemix/projects/iLeaf-mobile/builds/84b0a6ab-8a31-46f0-970a-7b702bd0f5eb
### iOS: 
Prebuild project on your device
```bash
npx expo prebuild --platform ios
```
Open ```ios/iLeaf-mobile.xcworkspace``` in your XCode and launch app on simulator

### 4. Run app and connect to http://localhost:8081
