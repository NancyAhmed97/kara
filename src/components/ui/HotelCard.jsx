import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Constants/Colors";

const HotelCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
        }}
        style={styles.imageStyle}
      />
      <TouchableOpacity style={styles.heartContainer}>
        <Ionicons
          name="heart-outline"
          size={20}
          color={Colors.primary}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={styles.titleStyle}> Single Room In Makkah</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Text style={styles.typeStyle}> Single Room</Text>
          <Text style={styles.typeStyle}>
            <Text style={styles.priceStyle}>$190</Text> / night
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location" color={"red"} size={20} />
            <Text style={styles.locationStyle}>Egypt-Benha</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" color={Colors.primary} size={20} />
            <Text style={styles.locationStyle}>4.5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    elevation: 5,
    borderRadius: 20,
    height: 310,
    backgroundColor: "white",
  },
  imageStyle: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
    borderRadius: 18,
  },
  heartContainer: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 30,
    right: 10,
    top: 10,
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 5,
  },
  typeStyle: { color: "gray" },
  locationStyle: {
    color: "gray",
    marginHorizontal: 3,
  },
  priceStyle: {
    color: Colors.primary,
    fontWeight: "700",
  },
});
