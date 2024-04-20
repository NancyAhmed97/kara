import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NoBookings = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AntDesign name="smileo" size={120} />
      <Text style={{ paddingTop: 30, fontSize: 20, fontWeight: "bold" }}>
        What is your next direction ?
      </Text>
      <Text style={{ paddingTop: 12, color: "#41403a" }}>
        You have no bookings yet, when you book one it will show here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NoBookings;
