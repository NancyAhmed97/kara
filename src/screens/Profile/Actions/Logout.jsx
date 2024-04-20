import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons"
import PrimaryButton from "../../../components/form/PrimaryButton"

const Logout = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: "white",
        width: "100%",
        padding: 16,
        borderRadius: 12
      }}>
        <Pressable>
          <FontAwesome name="times" size={16} />
        </Pressable>
        <Text style={{
          fontSize: 16,
          textTransform: "capitalize",
          paddingTop: 16,
        }}>
          are you sure you want to logout ?
        </Text>
        <View
          style={{
            height: 1,
            marginVertical: 16,
            backgroundColor: "#dcdada"
          }}
        />

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <PrimaryButton
            label="Logout"
            buttonStyles={{
              borderRadius: 6,
              paddingVertical: 12,
              paddingHorizontal: 16
            }}
          />
          <Pressable onPress={onClose}>
            <Text>cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .7)"
  }
});