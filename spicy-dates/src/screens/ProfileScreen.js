import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NeonButton from "../components/NeonButton";
import NeonCard from "../components/NeonCard";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-base-900 px-6 py-8">
      <Text className="mb-6 text-2xl font-bold text-text-primary">
        Perfil chispeante
      </Text>
      <NeonCard>
        <Text className="mb-2 text-lg font-semibold text-neon-green">
          Tu vibra actual
        </Text>
        <Text className="mb-6 text-text-muted">
          Amante de los planes improvisados, música synthwave y cafés nocturnos.
        </Text>
        <NeonButton label="Editar perfil" onPress={() => navigation.navigate("Discover")} />
      </NeonCard>
    </View>
  );
}
