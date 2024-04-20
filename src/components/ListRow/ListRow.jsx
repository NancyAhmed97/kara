import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const ListRow = ({
  icon,
  label,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.rowContainer}
    >
      <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
        {icon}
        <Text style={styles.labelStyle}>
          {label}
        </Text>
      </View>
      <MaterialIcons name={"arrow-forward-ios"} size={18} color="#222" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    borderBottomWidth: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#e0dfdf",
    paddingVertical: 16,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 7,
    textTransform: "capitalize"
  },
});

export default ListRow;
