import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import RoomsTypes from "./Components/RoomsTypes/RoomsTypes";
import FilterBox from "./Components/FilterBox/FilterBox";
import HotelCard from "../../../components/ui/HotelCard";
import { useCallback } from "react";

const BookingScreen = ({ navigation }) => {
  const handleCardPress = useCallback(() => {
    navigation.navigate("details");
  }, []);
  const handleSearchPress = useCallback(() => {
    navigation.navigate("search");
  }, []);
  return (
    <View style={styles.root}>
      <View style={{ marginVertical: 5 }}>
        <RoomsTypes />
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 0 }}>
          <FilterBox handleOnSearchPress={handleSearchPress} />
          <TouchableOpacity onPress={handleCardPress}>
            <HotelCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPress}>
            <HotelCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPress}>
            <HotelCard />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
});
