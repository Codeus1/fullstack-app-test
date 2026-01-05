import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChatListScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-base-900 px-6 py-8">
      <Text className="mb-6 text-2xl font-bold text-text-primary">Tus chats</Text>
      <Pressable
        onPress={() => navigation.navigate("ChatRoom")}
        className="rounded-2xl border border-neon-blue/40 bg-base-800 px-4 py-4"
      >
        <Text className="text-lg font-semibold text-neon-blue">Kira</Text>
        <Text className="text-text-muted">"¿Plan para esta noche?"</Text>
      </Pressable>
    </View>
  );
}
