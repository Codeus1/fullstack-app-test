import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { MessageBubble } from "../components/MessageBubble";
import { currentUserId, mockChats } from "../data/mockChats";

const chat = mockChats[0];

export const ChatRoom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{chat.name}</Text>
        <Text style={styles.status}>Activo ahora</Text>
      </View>
      <FlatList
        data={chat.messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        renderItem={({ item }) => (
          <MessageBubble message={item} isOwn={item.senderId === currentUserId} />
        )}
      />
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Escribe un mensaje"
          style={styles.input}
          placeholderTextColor="#9A9AAC"
        />
        <View style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFF5",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  status: {
    marginTop: 4,
    fontSize: 12,
    color: "#6F7285",
  },
  messageList: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 120,
  },
  inputBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#EFEFF5",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E3E4EA",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: "#1B1B1F",
    backgroundColor: "#FAFAFC",
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: "#4B4DED",
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
