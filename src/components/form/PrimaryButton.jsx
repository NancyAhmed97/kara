import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../../Constants/Colors";

const PrimaryButton = ({
  disabled = false,
  label,
  onPress,
  buttonStyles = {}
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyles]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
});

export default PrimaryButton;
