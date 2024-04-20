import { View, Text } from "react-native";
import styles from "./styles";
import { Colors } from "../../../../../Constants/Colors";

const RoomType = ({ roomType, active }) => {
  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: active === roomType.id ? Colors.primary : "white" }
      ]}
    >
      <Text
        style={{ color: active === roomType.id ? "white" : "black" }}
      >
        {roomType.name}
      </Text>
    </View>
  )
}

export default RoomType