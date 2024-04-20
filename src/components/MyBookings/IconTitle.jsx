import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const IconTitle = ({ icon, title, texts, links }) => {
  return (
    <View style={styles.rowContainer}>
      <Ionicons name={icon} size={20} />
      <View>
        <Text style={styles.rowTitleStyle}>{title}</Text>
        {texts?.map((item, index) => (
          <Text key={index.toString()} style={{ color: "gray" }}>
            {item}
          </Text>
        ))}
        {links?.map((item, index) => (
          <Text key={index.toString()} style={{ color: "blue", fontSize: 12 }}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default IconTitle;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    gap: 8,
  },
  rowTitleStyle: {
    fontWeight: "500",
  },
});
