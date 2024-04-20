import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import { Colors } from "../../Constants/Colors";
import ChatMessage from "../../components/Chat/ChatMessage";
import { Ionicons, Entypo } from "@expo/vector-icons";
//import { Icon } from "react-native-elements";
const MailboxScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { senderID: 2, message: "Hey there!", time: "6:01 PM" },
    {
      sender: "Robert Henry",
      message: "Hello, how are you doing?",
      time: "6:02 PM",
    },
    {
      senderID: 1,
      message: "I am good, how about you?",
      time: "6:02 PM",
    },

    {
      senderID: 1,
      message: `Can't wait to meet you.`,
      time: "6:03 PM",
    },
    {
      senderID: 2,
      message: `That's great, when are you coming?`,
      time: "6:03 PM",
    },
    {
      senderID: 2,
      message: `This weekend.`,
      time: "6:03 PM",
    },
    {
      senderID: 1,
      message: `Around 4 to 6 PM.`,
      time: "6:04 PM",
    },
    {
      senderID: 2,
      message: `Great, don't forget to bring me some mangoes.`,
      time: "6:05 PM",
    },
    {
      senderID: 1,
      message: `Sure!`,
      time: "6:05 PM",
    },
    {
      senderID: 2,
      message: `Sure!`,
      time: "6:05 PM",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  // function getTime(date) {
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12;
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   var strTime = hours + ":" + minutes + " " + ampm;
  //   return strTime;
  // }

  function sendMessage() {
    if (inputMessage === "") {
      return setInputMessage("");
    }
    //  let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        senderID: 2,
        message: inputMessage,
        time: "6:08 pm",
      },
    ]);
    setInputMessage("");
  }

  const renderMessages = useCallback(
    ({ item }) => (
      <ChatMessage message={item.message} id={item.senderID} date={item.time} />
    ),
    []
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: "#f2f2ff" }}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={renderMessages}
        />

        <View style={{ paddingVertical: 10 }}>
          <View style={styles.messageInputView}>
            <TouchableOpacity style={styles.messageSendView} onPress={() => {}}>
              <Entypo name="emoji-happy" size={20} color={Colors.primary} />
            </TouchableOpacity>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Message"
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity style={styles.messageSendView} onPress={() => {}}>
              <Ionicons name="attach" size={25} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}
            >
              <Ionicons name="send" size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MailboxScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    backgroundColor: "#f2f2ff",
  },
  messageInputView: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});
