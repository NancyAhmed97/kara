import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Colors } from "../../Constants/Colors";

const ChatMessage = ({ id, message, date }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={{ marginTop: 6 }}>
        <View style={styles.messageContainer(id)}>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            {message}
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: 14,
              alignSelf: "flex-end",
            }}
          >
            {date}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  messageContainer: (id) => ({
    maxWidth: Dimensions.get("screen").width * 0.8,
    backgroundColor: id === 1 ? Colors.primary : "#3a6ee8",
    alignSelf: id !== 1 ? "flex-end" : "flex-start",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    borderBottomLeftRadius: id !== 1 ? 8 : 0,
    borderBottomRightRadius: id !== 1 ? 0 : 8,
  }),
});

export default ChatMessage;
