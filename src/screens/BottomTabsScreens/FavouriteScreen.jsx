import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useCallback } from "react";
import HotelCard from "../../components/ui/HotelCard";
import FavouriteCard from "../../components/ui/FavouriteCard";

const favouriteData = [
  {
    id: 1,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png",
    label: "Room1",
    price: "2000",
  },
  {
    id: 2,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png",
    label: "Room2",
    price: "3000",
  },
  {
    id: 3,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png",
    label: "Room3",
    price: "2800",
  },
  {
    id: 4,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png",
    label: "Room4",
    price: "2000",
  },
  {
    id: 5,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/cute-room-ideas-1677096334.png",
    label: "Room5",
    price: "2000",
  },
];

const FavouriteScreen = () => {
  const renderItems = useCallback(
    ({ item }) => (
      <View style={{ margin: 3 }}>
        <FavouriteCard
          image={item.image}
          label={item.label}
          price={item.price}
        />
      </View>
    ),
    []
  );
  return (
    <View style={styles.root}>
      <FlatList
        key={(item, index) => index.toString()}
        data={favouriteData}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    gap: 8,
    alignItems: "center",
  },
});
