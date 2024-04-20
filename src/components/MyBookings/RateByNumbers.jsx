import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useState } from "react";

const RateByNumbers = ({ title }) => {
  const numbers = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);
  const [activeNumber, setActiveNumber] = useState(null);

  return (
    <View style={{ gap: 4 }}>
      <Text style={styles.question}>{title}</Text>
      <View style={styles.numbersContainer}>
        {numbers.map((item, index) => (
          <View
            key={index.toString()}
            style={{
              borderRightWidth: index === 9 ? 0 : 0.5,
              paddingRight: index === 9 ? 0 : 12,
            }}
          >
            <Text>{item}</Text>
          </View>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 4,
        }}
      >
        <Text>Bad</Text>
        <Text>Good</Text>
      </View>
    </View>
  );
};

export default RateByNumbers;

const styles = StyleSheet.create({
  question: {
    fontWeight: "500",
  },
  numbersContainer: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "silver",
    borderRadius: 16,
    padding: 8,
    justifyContent: "space-evenly",
  },
});
