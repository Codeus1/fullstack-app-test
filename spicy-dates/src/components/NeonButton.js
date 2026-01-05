import React from "react";
import { Pressable, Text } from "react-native";

export default function NeonButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-full bg-neon-pink px-6 py-3 shadow-neon"
    >
      <Text className="text-base font-semibold text-base-900">{label}</Text>
    </Pressable>
  );
}
