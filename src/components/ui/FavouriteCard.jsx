import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";

const FavouriteCard = ({ image, label, price }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={[styles.cardContainer(width)]}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.imageStyle}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{label}</Text>
        <Text style={styles.priceStyle}>{price} $</Text>
      </View>
    </View>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({
  cardContainer: (width) => ({
    width: width * (45 / 100),
    height: 180,
    padding: 5,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 8,
    gap: 4,
  }),
  imageStyle: {
    width: "100%",
    height: 130,
    resizeMode: "stretch",
    borderRadius: 8,
  },
  textContainer: {
    width: "100%",
    height: 30,
    marginVertical: 2,
    //  alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "700",
  },
  priceStyle: {
    color: "gray",
  },
});
