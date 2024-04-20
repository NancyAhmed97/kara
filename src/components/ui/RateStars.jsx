import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../Constants/Colors";

const RateStars = ({ rate, size }) => {
  const starsLength = 5;
  starSize = size ?? 13;
  const starsArray = new Array(starsLength).fill(0);
  return (
    <View style={styles.starsContainer}>
      {starsArray.map((item, index) => (
        <AntDesign
          key={index.toString()}
          name="star"
          color={index + 1 <= rate ? Colors.primary : "gray"}
          size={size}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: "row",
    gap: 4,
  },
});

export default RateStars;
