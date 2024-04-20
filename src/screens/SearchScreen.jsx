import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SearchCard from "../components/ui/SearchCard";
import Input from "../components/form/Input/Input";
import { Colors } from "../Constants/Colors";

const SearchScreen = () => {
  return (
    <View style={styles.root}>
      {/* seach */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            postfix={<AntDesign name="close" size={18} />}
            placeholder="Seach ..."
            inputContainerStyles={{
              borderRadius: 8,
              backgroundColor: Colors.inputBg,
              height: 50,
              borderColor: "transparent",
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 5,
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="filter" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            borderWidth: 1,
            borderColor: "#eee",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 6,
          }}
        >
          <Text style={{ textTransform: "capitalize" }}>apartment</Text>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: Colors.primary,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>5</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            borderWidth: 1,
            borderColor: "#eee",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 6,
          }}
        >
          <Text style={{ textTransform: "capitalize" }}>flat</Text>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: Colors.primary,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>60</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: "#222",
            textTransform: "capitalize",
          }}
        >
          results found!
        </Text>
      </View>

      <View>
        <SearchCard />
      </View>
      <View style={styles.line} />
      <View>
        <SearchCard />
      </View>
      <View style={styles.line} />
      <View>
        <SearchCard />
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  line: {
    backgroundColor: "gray",
    height: 0.5,
    marginTop: 7,
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default SearchScreen;
