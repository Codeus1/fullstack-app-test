import React from "react";
import { View } from "react-native";

export default function NeonCard({ children }) {
  return (
    <View className="rounded-3xl border border-neon-purple/40 bg-base-800/90 p-6 shadow-glow">
      {children}
    </View>
  );
}
