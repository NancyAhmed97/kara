import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/form/Input/Input";
import PrimaryButton from "../../components/form/PrimaryButton";
import SelectCountryCode from "./Components/SelectCountryCode";
import styles from "./styles";
import { useState } from "react";
import getCategories from "../../services/homeService";
import getHotels from "../../services/homeService";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { top } = useSafeAreaInsets();
  const [selectCountry, setSelectCountry] = useState(false);

  const {
    handleSubmit,
    control
  } = useForm();

  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={[styles.container, { paddingTop: top }]}>
          <Text
            style={styles.title}
          >
            تسجيل الدخول او الاشتراك
          </Text>
          <View style={{ gap: 12 }}>
            <Controller
              name="email"
              rules={{ required: true }}
              control={control}
              render={({ field: { onBlur, onChange } }) => (
                <Input
                  onChange={onChange} onBlur={onBlur}
                  inputContainerStyles={{ borderRadius: 4, height: 50 }}
                  placeholder="Username or Email"
                />
              )}
            />

            <View style={{ flexDirection: "row", gap: 6 }}>
              <View style={{ flex: "1" }}>
                <Input
                  inputContainerStyles={{ borderRadius: 4, height: 50 }}
                  placeholder="+20"
                  onPressIn={() => setSelectCountry(true)}
                  prefix={(
                    <View style={{ paddingStart: 12 }}>
                      <AntDesign name="down" size={16} />
                    </View>
                  )}
                />
              </View>
              <View style={{ flex: "3" }}>
                <Controller
                  name="phone"
                  rules={{ required: true }}
                  control={control}
                  render={({ field: { onBlur, onChange } }) => (
                    <Input
                      onChange={onChange} onBlur={onBlur}
                      inputContainerStyles={{ borderRadius: 4, height: 50 }}
                      placeholder="Phone"
                    />
                  )}
                />
              </View>
            </View>
            <Controller
              name="password"
              rules={{ required: true }}
              control={control}
              render={({ field: { onBlur, onChange } }) => (
                <Input
                  onChange={onChange} onBlur={onBlur}
                  inputContainerStyles={{ borderRadius: 4, height: 50 }}
                  placeholder="Password"
                />
              )}
            />

          </View>
          <Text style={styles.hint}>
            سنتصل بك او سنرسل اليك رسالة نصية تاكيد رقمك. قد تطبق اسعار الرسائل والبيانات القياسية.
          </Text>
          <PrimaryButton
            buttonStyles={{
              marginTop: 12,
              paddingVertical: 16,
            }}
            onPress={() =>navigation.navigate("bottomTabs")}
            label="متابعة"
          />
          <Text style={{ textAlign: "center", marginVertical: 12 }}>او</Text>
          <View style={{ gap: 12 }}>
            <Pressable
              style={styles.socialBtn}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>المتابعة باستخدام جوجل</Text>
              </View>
              <Image
                source={require("../../../assets/images/icons8-google-48.png")}
                width={30}
                height={30}
                style={{ width: 30, height: 30 }}
                alt="google"
              />
            </Pressable>

            <Pressable
              style={styles.socialBtn}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>المتابعة باستخدام فيسبوك</Text>
              </View>
              <Image
                source={require("../../../assets/images/icons8-facebook-48.png")}
                width={30}
                height={30}
                style={{ width: 30, height: 30 }}
                alt="google"
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      {selectCountry && (
        <SelectCountryCode
          showSelectCountry={selectCountry}
          onClose={() => setSelectCountry(false)}
        />
      )}
    </>
  )
}

export default Login