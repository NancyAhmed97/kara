import { View, Text, Switch } from "react-native";
import Input from "../../../../components/form/Input/Input";
import styles from "./styles";

const Info = () => {
  return (
    <View style={styles.container}>
      <Input
        labelText="full name"
        placeholder="Full Name"
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
      <View
        style={{
          flexDirection: "row",
          gap: 16
        }}
      >
        <View style={{ width: 100 }}>
          <Input
            labelText="country code"
            placeholder="Country Code"
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
            labelText="phone number"
            placeholder="Phone Number"
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

      <Input
        labelText="email"
        placeholder="Email"
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

      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <Switch />
        <Text style={{ textTransform: "capitalize", fontSize: 14 }}>guest name is same with contact</Text>
      </View>

      <Input
        labelText="guest name"
        placeholder="Guest Name"
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
  )
}

export default Info