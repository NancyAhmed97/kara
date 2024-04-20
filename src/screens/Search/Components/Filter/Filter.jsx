import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheet } from "@rneui/themed";
import PrimaryButton from "../../../../components/form/PrimaryButton";
import { CheckBox } from "@rneui/base";
import { Colors } from "../../../../Constants/Colors";

const Filter = ({ showFilter, onClose }) => {
  const { top, bottom } = useSafeAreaInsets();
  const { height } = Dimensions.get("window")

  return (
    <BottomSheet
      isVisible={showFilter}
      modalProps={{ animationType: "none" }}
      onBackdropPress={onClose}
    >
      <View
        style={{
          backgroundColor: "white",
          paddingBottom: bottom + 16,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          minHeight: height
        }}
      >
        <View
          style={{
            paddingTop: top,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: Colors.primary,
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >
          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="arrowleft" color="white" size={16} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ textTransform: "capitalize", color: "white" }}>
                filter
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{ textTransform: "capitalize", color: "white" }}>reset</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ gap: 0, flex: 1, padding: 16 }}>
          <View style={{ borderBottomWidth: 1, borderBottomColor: "#eee", paddingTop: 16 }}>
            <Text style={{ fontSize: 16, paddingBottom: 16, textTransform: "capitalize" }}>common filter</Text>
            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox checked size={18} />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox size={18} />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox size={18} />
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: "#eee", paddingTop: 16 }}>
            <Text style={{ fontSize: 16, paddingBottom: 16, textTransform: "capitalize" }}>common filter</Text>
            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox checked size={18} />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox size={18} />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox size={18} />
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: "#eee", paddingTop: 16 }}>
            <Text style={{ fontSize: 16, paddingBottom: 16, textTransform: "capitalize" }}>common filter</Text>
            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox checked size={18} />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox size={18} />
            </View>

            <View style={{ flexDirection: "row", gap: 12, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, textTransform: "capitalize" }}>
                pace between houses
              </Text>
              <CheckBox size={18} />
            </View>
          </View>


        </ScrollView>

        <View style={{ borderTopWidth: 1, borderTopColor: "#eee", paddingTop: 18, gap: 6, paddingHorizontal: 16 }}>
          <Text style={{ fontWeight: "bold" }}>259,55 places matches your search</Text>
          <PrimaryButton
            label="Filter"
            buttonStyles={{ marginTop: 12, paddingVertical: 12, borderRadius: 6 }}
            onPress={onClose}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default Filter;
