import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import RateStars from "../../components/ui/RateStars";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Constants/Colors";
const SearchCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: "https://digital.ihg.com/is/image/ihg/intercontinental-raa-atoll-6514910414-4x3",
        }}
        style={styles.imageStyle}
      />
      <View style={{ width: "50%" }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 0.5,
            borderColor: Colors.primary,
            marginBottom: 3,
            alignSelf: "flex-start",
          }}
        >
          <Text style={styles.typeStyle}>Hotels</Text>
        </View>
        <View style={{ marginBottom: 5, gap: 2 }}>
          <Text style={styles.titleStyle}>Golden Tolib</Text>
          <Text style={styles.titleStyle}>Essential Hotel</Text>
          <Text>$145/ Night</Text>
        </View>
        <RateStars rate={4} size={16} />
        <View
          style={{
            flexDirection: "row",
            gap: 2,
            marginTop: 4,
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={13} color={"gray"} />
          <Text style={{ color: "gray" }}>West Denpassar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 160,

    padding: 5,
    width: "100%",
    flexDirection: "row",
    gap: 20,
  },
  imageStyle: {
    width: "40%",
    height: 145,
    borderRadius: 10,
    resizeMode: "stretch",
  },
  typeStyle: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.primary,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "900",
  },
});

export default SearchCard;
