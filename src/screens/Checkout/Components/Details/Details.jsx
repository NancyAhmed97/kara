import { View, Text, ScrollView, Image, Pressable, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import room from "../../../../../assets/images/room.jpg";
import PrimaryButton from "../../../../components/form/PrimaryButton";

const Details = () => {
  return (
    <ScrollView contentContainerStyle={{ gap: 12 }}>
      <View
        style={{ flexDirection: "row", gap: 16, backgroundColor: "white", padding: 16 }}
      >
        <Image
          style={{ width: 120, height: 120, borderRadius: 12 }}
          source={room}
        />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ gap: 6 }}>
            <Text
              style={{ color: "#777", textTransform: "capitalize", fontSize: 14 }}
            >
              full house
            </Text>
            <Text style={{ fontSize: 16, textTransform: "capitalize" }}>
              calm house in a big view calm house in a big view
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <AntDesign name="star" size={16} />
            <Text>
              5.00
            </Text>
            <Text style={{ color: "#777" }}>(2)</Text>
          </View>
        </View>
      </View>

      <View
        style={{ backgroundColor: "white", padding: 16 }}
      >
        <Text
          style={{ textTransform: "capitalize", fontSize: 18 }}
        >
          your trip
        </Text>

        <View style={{ gap: 12, paddingTop: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ gap: 6 }}>
              <Text
                style={{
                  fontSize: 16,
                  textTransform: "capitalize"
                }}
              >
                your date
              </Text>
              <Text
                style={{
                  color: "#888",
                  textTransform: "capitalize"
                }}
              >
                25-12-2022
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

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ gap: 6 }}>
              <Text
                style={{
                  fontSize: 16,
                  textTransform: "capitalize"
                }}
              >
                guests
              </Text>
              <Text
                style={{
                  color: "#888",
                  textTransform: "capitalize"
                }}
              >
                2 guests
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
        </View>
      </View>

      <View
        style={{ backgroundColor: "white", padding: 16 }}
      >
        <Text
          style={{ textTransform: "capitalize", fontSize: 18 }}
        >
          coupon
        </Text>

        <View style={{ gap: 12, paddingTop: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <TextInput
              placeholder="Enter Coupon"
              style={{
                borderWidth: 1,
                borderColor: "#eee",
                flex: 1,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 6
              }}
            />
            <PrimaryButton
              label="apply"
              buttonStyles={{
                paddingVertical: 12,
                paddingHorizontal: 12
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{ backgroundColor: "white", padding: 16 }}
      >
        <Text
          style={{ textTransform: "capitalize", fontSize: 18 }}
        >
          pricing details
        </Text>

        <View style={{ gap: 12, paddingTop: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#888",
                fontSize: 16,
                textTransform: "capitalize"
              }}
            >
              taxes
            </Text>
            <Text
              style={{
                color: "#888",
                fontSize: 16,
                textTransform: "capitalize"
              }}
            >
              20.00$
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#888",
                fontSize: 16,
                textTransform: "capitalize"
              }}
            >
              services
            </Text>
            <Text
              style={{
                color: "#888",
                fontSize: 16,
                textTransform: "capitalize"
              }}
            >
              200.00$
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#888",
                fontSize: 16,
                textTransform: "capitalize"
              }}
            >
              food
            </Text>
            <Text
              style={{
                color: "#888",
                fontSize: 16,
                textTransform: "capitalize"
              }}
            >
              50.00$
            </Text>
          </View>

          <View style={{ height: 1, backgroundColor: "#eee" }} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textTransform: "capitalize",
                fontWeight: "bold"
              }}
            >
              total
            </Text>
            <Text
              style={{
                fontSize: 16,
                textTransform: "capitalize",
                fontWeight: "bold"
              }}
            >
              50.00$
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details