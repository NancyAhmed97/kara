import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../../Constants/Colors";

const Tap = ({ tab, activeTab, handlePress }) => {
  const handleChange = useCallback(() => {
    handlePress(tab.key);
  }, []);
  return (
    <TouchableOpacity
      style={[
        styles.tabContainer,
        activeTab === tab.key ? styles.tabContainerActive : {},
      ]}
      onPress={handleChange}
    >
      <Text style={styles.tabContainerText}>{tab.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainerText: {
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "700",
    color: Colors.primary,
  },
  tabContainerActive: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: "rgba(215, 174, 108,0.3)",
  },

  tabContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
});

export default Tap;
