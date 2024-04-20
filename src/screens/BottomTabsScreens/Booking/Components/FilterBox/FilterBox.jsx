import { useState } from "react";
import { Calendar } from "react-native-calendars";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, Button, Pressable } from "react-native";
import { BottomSheet } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../../../../components/form/Input/Input";
import styles from "./styles";
import PrimaryButton from "../../../../../components/form/PrimaryButton";
import { Switch } from "@rneui/base";

const FilterBox = ({ handleOnSearchPress }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDetailsPicker, setShowDetailsPicker] = useState(false);
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Input
        placeholder="where to ?"
        prefix={<AntDesign name="search1" size={16} />}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            placeholder="select date"
            onPressIn={() => setShowDatePicker(prev => !prev)}
            prefix={<AntDesign name="calendar" size={16} />}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Input
            placeholder="adults"
            onPressIn={() => setShowDetailsPicker(prev => !prev)}
            prefix={<AntDesign name="user" size={16} />}
          />
        </View>
      </View>
      <Pressable style={styles.searchButton} onPress={handleOnSearchPress}>
        <Text style={styles.buttonText}>search</Text>
      </Pressable>

      {/* date picker bottom sheet */}
      <BottomSheet
        isVisible={showDatePicker}
        modalProps={{ animationType: "none" }}
        onBackdropPress={() => setShowDatePicker(prev => !prev)}
      >
        <View
          style={{ backgroundColor: "white", padding: 16, paddingBottom: bottom + 16, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        >
          <Text style={styles.dateModalTitle}>حدد التواريخ</Text>
          <Calendar
            testID="test"
            allowSelectionOutOfRange
            enableSwipeMonths
            onDayPress={() => { }}
          />

          <PrimaryButton
            label="حدد التواريخ"
            buttonStyles={{ marginTop: 12, paddingVertical: 12, borderRadius: 6 }}
          />
        </View>
      </BottomSheet>

      <BottomSheet
        isVisible={showDetailsPicker}
        modalProps={{ animationType: "none" }}
        onBackdropPress={() => setShowDetailsPicker(prev => !prev)}
      >
        <View
          style={{ backgroundColor: "white", padding: 16, paddingBottom: bottom + 16, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        >
          <Text style={styles.dateModalTitle}>حدد الغرف والضيوف</Text>

          <View style={{ gap: 16, marginBottom: 12 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={styles.actionsContainer}>
                <Pressable>
                  <AntDesign name="plus" size={18} />
                </Pressable>
                <Text>2</Text>
                <Pressable>
                  <AntDesign name="minus" size={18} />
                </Pressable>
              </View>
              <Text>الغرف</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={styles.actionsContainer}>
                <Pressable>
                  <AntDesign name="plus" size={18} />
                </Pressable>
                <Text>2</Text>
                <Pressable>
                  <AntDesign name="minus" size={18} />
                </Pressable>
              </View>
              <Text>بالغون</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={styles.actionsContainer}>
                <Pressable>
                  <AntDesign name="plus" size={18} />
                </Pressable>
                <Text>2</Text>
                <Pressable>
                  <AntDesign name="minus" size={18} />
                </Pressable>
              </View>
              <Text>عدد الاطفال</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Switch />
              <Text>هل ستصطحب معك حيوانات اليفه ؟</Text>
            </View>
          </View>

          <PrimaryButton
            label="تطبيق"
            buttonStyles={{ marginTop: 12, paddingVertical: 12, borderRadius: 6 }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default FilterBox;
