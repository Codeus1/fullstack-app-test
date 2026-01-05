import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NeonButton from "../components/NeonButton";
import NeonCard from "../components/NeonCard";

export default function DiscoverScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-base-900 px-6 py-8">
      <Text className="mb-6 text-2xl font-bold text-text-primary">
        Descubre conexiones
      </Text>
      <NeonCard>
        <Text className="mb-2 text-lg font-semibold text-neon-pink">
          Kira · 28
        </Text>
        <Text className="mb-4 text-text-muted">
          Arte digital, bicis nocturnas y ramen picante.
        </Text>
        <NeonButton label="Abrir chat" onPress={() => navigation.navigate("ChatRoom")} />
      </NeonCard>
      <View className="mt-6">
        <NeonButton label="Ver lista de chats" onPress={() => navigation.navigate("ChatList")} />
      </View>
    </View>
  );
}
