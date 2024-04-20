import { View, Text, Pressable } from "react-native";

const Item = ({
  label,
  value,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 12,
        paddingBottom: 12
      }}
    >
      <View style={{ gap: 6 }}>
        <Text
          style={{
            fontSize: 18,
            textTransform: "capitalize"
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: "#888",
            textTransform: "capitalize"
          }}
        >
          {value}
        </Text>
      </View>
      <Pressable>
        <Text style={{
          textDecorationLine: "underline",
          textTransform: "capitalize",
          fontWeight: "600"
        }}>
          update
        </Text>
      </Pressable>
    </View>
  )
}

export default Item