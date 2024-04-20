import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheet } from "@rneui/themed";
import PrimaryButton from "../../../../components/form/PrimaryButton";
import { CheckBox } from "@rneui/base";

const Sort = ({ showSort, onClose }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ padding: 16 }}>
      <BottomSheet
        isVisible={showSort}
        modalProps={{ animationType: "none" }}
        onBackdropPress={onClose}
      >
        <View
          style={{ backgroundColor: "white", padding: 16, paddingBottom: bottom + 16, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        >
          <Text style={{
            fontSize: 20,
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: 24
          }}>
            sort type:
          </Text>

          <View style={{ gap: 0 }}>
            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                size={18}
              />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                size={18}
              />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                size={18}
              />
            </View>
          </View>

          <PrimaryButton
            label="sort"
            buttonStyles={{ marginTop: 12, paddingVertical: 12, borderRadius: 6 }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default Sort;
