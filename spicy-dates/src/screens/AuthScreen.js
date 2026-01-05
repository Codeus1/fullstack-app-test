import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NeonButton from "../components/NeonButton";
import NeonCard from "../components/NeonCard";

export default function AuthScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-base-900 px-6 py-10">
      <Text className="mb-4 text-2xl font-bold text-text-primary">
        Ingresa a tu universo neón
      </Text>
      <Text className="mb-6 text-text-muted">
        Elige tu energía y desbloquea nuevas conexiones.
      </Text>
      <NeonCard>
        <Text className="mb-6 text-lg font-semibold text-neon-blue">
          Acceso rápido
        </Text>
        <View className="gap-3">
          <NeonButton label="Continuar con correo" onPress={() => navigation.navigate("Profile")} />
          <NeonButton label="Continuar con Spotify" onPress={() => navigation.navigate("Discover")} />
        </View>
      </NeonCard>
    </View>
  );
}
