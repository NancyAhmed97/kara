import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RateByFace = ({ title }) => {
  const faces = useMemo(
    () => [
      "emoticon-sad-outline",
      "emoticon-neutral-outline",
      "emoticon-happy-outline",
      "emoticon-excited-outline",
    ],
    []
  );
  return (
    <View style={{ gap: 4 }}>
      <Text style={styles.question}>{title}</Text>
      <View style={styles.numbersContainer}>
        {faces.map((item, index) => (
          <View
            key={index.toString()}
            style={{
              borderRightWidth: index === 3 ? 0 : 0.5,
              paddingRight: index === 3 ? 0 : 32,
            }}
          >
            <MaterialCommunityIcons name={item} size={24} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RateByFace;

const styles = StyleSheet.create({
  question: {
    fontWeight: "500",
  },
  numbersContainer: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "silver",
    borderRadius: 16,
    padding: 4,
    justifyContent: "space-evenly",
  },
});
