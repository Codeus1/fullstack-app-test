import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootStack from "./src/navigation/RootStack";
import { neonNavigationTheme } from "./src/theme/navigationTheme";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={neonNavigationTheme}>
        <StatusBar style="light" />
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
