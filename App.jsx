import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Provider } from "react-redux";
import { Store } from "./reduxStore/Store";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import IntroScreen from "./screens/IntroScreen";
import LoginOTPScreen from "./screens/LoginOTPScreen";
import ScannerScreen from "./screens/ScannerScreen";
import HomeSearchScreen from "./screens/HomeSearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BillsScreen from "./screens/BillsScreen";
import SingleBillScreen from "./screens/SingleBillScreen";
import ReferScreen from "./screens/ReferScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LoginOTPScreen" component={LoginOTPScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
          <Stack.Screen name="HomeSearchScreen" component={HomeSearchScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="BillsScreen" component={BillsScreen} />
          <Stack.Screen name="SingleBillScreen" component={SingleBillScreen} />
          <Stack.Screen name="ReferScreen" component={ReferScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;
