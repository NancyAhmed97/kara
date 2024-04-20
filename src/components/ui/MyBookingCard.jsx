import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const MyBookingCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg",
        }}
        style={styles.image}
      />
      <View style={{ gap: 4, paddingVertical: 4 }}>
        <Text style={styles.titleStyle}>Knight Giza Pyramids</Text>
        <Text style={styles.detailsText}>22 Oct to 25 Dec . 742 EGP</Text>
        <Text style={styles.statusText}>canceled</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 105,
    flexDirection: "row",
    gap: 12,
    padding: 16,
    // borderWidth: 0.5,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "30%",
    borderRadius: 8,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "600",
  },
  detailsText: {
    color: "gray",
    fontSize: 12,
  },
  statusText: {
    color: "silver",
    fontSize: 11,
  },
});

export default MyBookingCard;
