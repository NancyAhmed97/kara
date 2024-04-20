import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import RateStars from "./RateStars";

const Comment = () => {
  return (
    <View>
      <View style={styles.userDataContainer}>
        <Image
          style={styles.imageStyle}
          src="https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
        />
        <Text style={styles.userName}>Abdallah Mohamed</Text>
      </View>
      <View style={styles.rateDateContainer}>
        <RateStars rate={3} />
        <Text>3/1/2024</Text>
      </View>
      <Text>
        Hotel Garrett offers access to the rooftop pool at the SoMa House, just
        across the street for your enjoyment. Each room features
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 5,
  },
  userName: {
    fontWeight: "700",
    fontSize: 15,
    // color: "gray",
  },
  rateDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 5,
  },
});

export default Comment;
