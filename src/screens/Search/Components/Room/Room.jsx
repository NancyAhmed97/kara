import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../../../Constants/Colors";

const Room = () => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 24, gap: 12 }}>
      <Image
        resizeMode="cover"
        style={{ height: 300, backgroundColor: "red", flex: 1, borderRadius: 12 }}
        source={require("../../../../../assets/images/room.jpg")}
      />
      <View style={{ flex: 2, gap: 10, flexDirection: "column", alignItems: "flex-start" }}>
        <Text style={{
          fontSize: 22,
          textTransform: "capitalize"
        }}>
          knight giza of pyramid
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary,
              borderRadius: 6
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              9.9
            </Text>
          </View>
          <Text style={{ color: "#3F3F3F", textTransform: "capitalize", fontSize: 16 }}>
            special . 9 rates
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <AntDesign name="playcircleo" size={18} />
          <Text style={{ textTransform: "capitalize", fontSize: 14 }}>
            cairo, 12 kilo meters from home
          </Text>
        </View>

        <View style={{
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 12,
          backgroundColor: Colors.primary
        }}>
          <Text style={{ textTransform: "capitalize", color: "white" }}>
            special offer
          </Text>
        </View>

        <Text style={{ color: "#3F3F3F", textTransform: "capitalize", fontSize: 16 }}>
          room 3 bedrooms
        </Text>

        <Text style={{ color: "#3F3F3F", textTransform: "capitalize", fontSize: 16 }}>
          price from 1 day, 2 adults
        </Text>

        <Text style={{ color: "#000", textTransform: "uppercase", fontSize: 24, fontWeight: "bold" }}>
          EGP200
          <View style={{ width: 6, height: 1 }} />
          <Text style={{ color: "red", textDecorationLine: "line-through", fontWeight: "normal", fontSize: 18 }}>
            EGP 120
          </Text>
        </Text>

        <Text style={{ color: "#3F3F3F", textTransform: "capitalize", fontSize: 16 }}>
          111 tax rate
        </Text>

        <Text style={{ color: "#000", textTransform: "capitalize", fontSize: 16 }}>
          no need to pay first
        </Text>
      </View>
    </View>
  )
}

export default Room