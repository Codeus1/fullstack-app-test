import React from "react";
import { View, Text } from "react-native";
import NeonCard from "../components/NeonCard";

export default function ChatRoomScreen() {
  return (
    <View className="flex-1 bg-base-900 px-6 py-8">
      <Text className="mb-4 text-2xl font-bold text-text-primary">Chat con Kira</Text>
      <View className="gap-4">
        <NeonCard>
          <Text className="text-text-muted">¿Listx para una noche de ramen y neón?</Text>
        </NeonCard>
        <View className="items-end">
          <View className="max-w-[80%] rounded-2xl bg-neon-purple/80 px-4 py-3">
            <Text className="text-base-900">Siempre, ¡vamos!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
