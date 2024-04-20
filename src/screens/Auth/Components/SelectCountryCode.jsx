import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { BottomSheet } from "@rneui/themed";
import PrimaryButton from "../../../components/form/PrimaryButton";

const SelectCountryCode = ({ showSelectCountry, onClose }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ padding: 16 }}>
      <BottomSheet
        isVisible={showSelectCountry}
        modalProps={{ animationType: "none" }}
        onBackdropPress={onClose}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            paddingBottom: bottom + 16,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}
        >
          <View style={{ gap: 12, marginBottom: 16 }}>
            <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
              egypt (+20)
            </Text>
            <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
              egypt (+20)
            </Text>
            <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
              egypt (+20)
            </Text>
            <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
              egypt (+20)
            </Text>
          </View>

          <PrimaryButton
            label="Select"
            buttonStyles={{ marginTop: 12, paddingVertical: 12, borderRadius: 6 }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default SelectCountryCode;
