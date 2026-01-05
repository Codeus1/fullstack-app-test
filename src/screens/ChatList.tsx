import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { mockChats } from "../data/mockChats";

export const ChatList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Matches recientes</Text>
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.timestamp}</Text>
              </View>
              <Text style={styles.subtitle}>{item.matchDate}</Text>
              <Text style={styles.preview} numberOfLines={1}>
                {item.lastMessage}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  card: {
    flexDirection: "row",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECECF2",
    backgroundColor: "#FFFFFF",
    marginBottom: 14,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
  },
  time: {
    fontSize: 12,
    color: "#8A8FA3",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: "#8A8FA3",
  },
  preview: {
    marginTop: 6,
    fontSize: 14,
    color: "#1B1B1F",
  },
});
