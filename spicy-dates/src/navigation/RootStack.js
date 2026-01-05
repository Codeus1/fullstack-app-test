import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import AuthScreen from "../screens/AuthScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import ChatListScreen from "../screens/ChatListScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#130a23" },
        headerTintColor: "#f5e9ff",
        headerTitleStyle: { fontWeight: "600" },
        contentStyle: { backgroundColor: "#0b0616" }
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: "Bienvenida" }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Tu Perfil" }}
      />
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{ title: "Descubrir" }}
      />
      <Stack.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{ title: "Chats" }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ title: "Conversación" }}
      />
    </Stack.Navigator>
  );
}
