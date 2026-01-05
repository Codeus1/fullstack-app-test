import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import type { Profile } from "../data/mockProfiles";

const VIBE_COPY: Record<Profile["vibe"], string> = {
  spicy: "Spicy",
  "para pasarlo bien": "Para pasarlo bien",
};

type ProfileCardProps = {
  profile: Profile;
};

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profile.avatar }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>
          {profile.name}, {profile.age}
        </Text>
        <View style={styles.vibeBadge}>
          <Text style={styles.vibeText}>{VIBE_COPY[profile.vibe]}</Text>
        </View>
        <View style={styles.tags}>
          {profile.interests.map((interest) => (
            <View key={interest} style={styles.tag}>
              <Text style={styles.tagText}>{interest}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  name: {
    fontSize: 24,
    color: "#F9FAFB",
    fontWeight: "700",
  },
  vibeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#F97316",
  },
  vibeText: {
    color: "#111827",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 0.6,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#1F2937",
  },
  tagText: {
    color: "#E5E7EB",
    fontSize: 12,
    fontWeight: "600",
  },
});
