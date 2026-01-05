import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NeonButton from "../components/NeonButton";

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-base-900 px-6">
      <View className="mb-6 h-40 w-40 items-center justify-center rounded-full border border-neon-pink/60 bg-base-800 shadow-neon">
        <Text className="text-5xl">🔥</Text>
      </View>
      <Text className="mb-2 text-center text-3xl font-bold text-neon-pink">
        Spicy Dates
      </Text>
      <Text className="mb-8 text-center text-base text-text-muted">
        Conecta con matches chispeantes y conversaciones que brillan.
      </Text>
      <NeonButton label="Empezar" onPress={() => navigation.navigate("Auth")} />
    </View>
  );
}
