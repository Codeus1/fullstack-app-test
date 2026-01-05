import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Message } from "../data/mockChats";

export type MessageBubbleProps = {
  message: Message;
  isOwn: boolean;
};

export const MessageBubble = ({ message, isOwn }: MessageBubbleProps) => {
  return (
    <View style={[styles.row, isOwn ? styles.rowOwn : styles.rowOther]}>
      <View style={[styles.bubble, isOwn ? styles.bubbleOwn : styles.bubbleOther]}>
        <Text style={styles.text}>{message.text}</Text>
        <Text style={styles.time}>{message.timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 12,
  },
  rowOwn: {
    justifyContent: "flex-end",
  },
  rowOther: {
    justifyContent: "flex-start",
  },
  bubble: {
    maxWidth: "80%",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
  },
  bubbleOwn: {
    backgroundColor: "#4B4DED",
    borderBottomRightRadius: 4,
  },
  bubbleOther: {
    backgroundColor: "#F1F2F6",
    borderBottomLeftRadius: 4,
  },
  text: {
    fontSize: 15,
    color: "#1B1B1F",
  },
  time: {
    marginTop: 6,
    fontSize: 11,
    color: "#6F7285",
    textAlign: "right",
  },
});
