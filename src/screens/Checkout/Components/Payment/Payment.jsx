import { View, Text, Switch, TouchableOpacity } from "react-native";
import Input from "../../../../components/form/Input/Input";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { Colors } from "../../../../Constants/Colors";

const Payment = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 3,
          borderColor: Colors.primary,
          paddingVertical: 21,
          paddingHorizontal: 12,
          borderRadius: 4
        }}
      >
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <AntDesign color={Colors.primary} name="checkcircleo" size={20} />
          <Text style={{ textTransform: "capitalize", fontWeight: "bold" }}>credit card</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <AntDesign name="creditcard" color={Colors.orange} size={20} />
        </View>
      </TouchableOpacity>
      <Input
        labelText="Card Number"
        placeholder="Card Number"
        labelTextStyles={{
          color: "gray",
          fontWeight: "bold"
        }}
        inputContainerStyles={{
          borderRadius: 0,
          borderWidth: 0,
          borderBottomWidth: 1,
        }}
        inputStyles={{
          paddingStart: 0
        }}
        postfix={<AntDesign name="creditcard" size={20} />}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 16
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            labelText="Security code"
            placeholder="Security Code"
            labelTextStyles={{
              color: "gray",
              fontWeight: "bold"
            }}
            inputContainerStyles={{
              borderRadius: 0,
              borderWidth: 0,
              borderBottomWidth: 1,
            }}
            inputStyles={{
              paddingStart: 0
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Input
            labelText="Expire Date"
            placeholder="Expire Date"
            labelTextStyles={{
              color: "gray",
              fontWeight: "bold"
            }}
            inputContainerStyles={{
              borderRadius: 0,
              borderWidth: 0,
              borderBottomWidth: 1,
            }}
            inputStyles={{
              paddingStart: 0
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Payment