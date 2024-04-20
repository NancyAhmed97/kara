import { View, StyleSheet } from "react-native";
import Item from "./Item";

const PersonalInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Item
        label="full name"
        value="muhammed mashhour"
      />
      <View style={{ height: 1, backgroundColor: "#e6e6e6" }} />

      <Item
        label="phone number"
        value="+20 1019741936"
      />
      <View style={{ height: 1, backgroundColor: "#e6e6e6" }} />

      <Item
        label="email"
        value="mohamedmashhour624@gmail.com"
      />
      <View style={{ height: 1, backgroundColor: "#e6e6e6" }} />

      <Item
        label="address"
        value="egypt, giza"
      />
      <View style={{ height: 1, backgroundColor: "#e6e6e6" }} />

      <Item
        label="id"
        value="2132492374892734"
      />
      <View style={{ height: 1, backgroundColor: "#e6e6e6" }} />
    </View>
  )
}

export default PersonalInfoScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "white"
  }
});