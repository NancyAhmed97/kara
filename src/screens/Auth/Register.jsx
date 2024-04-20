import { View, Text, ScrollView, Pressable, Image, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/form/Input/Input";
import PrimaryButton from "../../components/form/PrimaryButton";
import SelectCountryCode from "./Components/SelectCountryCode";
import styles from "./styles";
import { useState } from "react";
import { register } from "../../store/authSlice";
import { CheckBox } from "@rneui/base";
import { Colors } from "../../Constants/Colors";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { top } = useSafeAreaInsets();
  const [selectCountry, setSelectCountry] = useState(false);

  const {
    handleSubmit,
    getValues,
    setValue,
    watch,
    control,
  } = useForm({
    defaultValues: {
      agree_rule: false
    }
  });

  watch(["agree_rule"]);

  const onSubmit = (data) => {
    if (!data.agree_rule) return alert("agree terms & conditions");
    dispatch(register(data))
      .unwrap()
      .then(res => {
        console.log(res);
        alert("register");
      })
      .catch(e => {
        alert(e);
      })
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={[styles.container, { paddingTop: top }]}>
          <View style={styles.titleContainer}>
            <AntDesign name="user" size={30} />
            <Text
              style={styles.title}
            >
              Create Account
            </Text>
          </View>
          <View style={{ gap: 12 }}>
            <Controller
              name="username"
              rules={{ required: true }}
              control={control}
              render={({ field: { onBlur, onChange } }) => (
                <Input
                  onChange={onChange} onBlur={onBlur}
                  inputContainerStyles={{ borderRadius: 4, height: 50 }}
                  placeholder="Username"
                />
              )}
            />

            <Controller
              name="email"
              rules={{ required: true }}
              control={control}
              render={({ field: { onBlur, onChange } }) => (
                <Input
                  onChange={onChange} onBlur={onBlur}
                  inputContainerStyles={{ borderRadius: 4, height: 50 }}
                  placeholder="Email"
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
                  secureTextEntry={!showPassword}
                  placeholder="Password"
                  postfix={(
                    <Pressable
                      style={styles.passwordIcon}
                      onPress={() => setShowPassword(prev => !prev)}
                    >
                      <Feather name={showPassword ? "eye-off" : "eye"} size={18} />
                    </Pressable>
                  )}
                />
              )}
            />

            <CheckBox
              title="agree privacy policy & terms conditions"
              textStyle={{
                fontSize: 15,
                textTransform: "capitalize",
                fontWeight: 600
              }}
              onPress={() => setValue("agree_rule", !getValues("agree_rule"))}
              checked={getValues("agree_rule")}
              containerStyle={{
                backgroundColor: "transparent",
                paddingHorizontal: 0
              }}
            />
          </View>

          <PrimaryButton
            disabled={auth.isLoading}
            buttonStyles={{
              marginTop: 12,
              paddingVertical: 16,
            }}
            onPress={handleSubmit(onSubmit)}
            label={auth.isLoading ? <ActivityIndicator color="white" /> : "Register"}
          />
          <View style={styles.actionHint}>
            <Text style={styles.actionHintText}>
              already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text style={[styles.actionHintText, { color: Colors.blue, textDecorationLine: "underline" }]}>
                login
              </Text>
            </Pressable>
          </View>

          <View style={styles.orContainer}>
            <Text style={styles.orText}>
              or
            </Text>
          </View>

          <View style={{ gap: 12 }}>
            <Pressable
              style={styles.socialBtn}
            >
              <Image
                source={require("../../../assets/images/icons8-google-48.png")}
                width={30}
                height={30}
                style={{ width: 30, height: 30 }}
                alt="google"
              />
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Continue using google</Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.socialBtn}
            >
              <Image
                source={require("../../../assets/images/icons8-facebook-48.png")}
                width={30}
                height={30}
                style={{ width: 30, height: 30 }}
                alt="google"
              />
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Continue using facebook</Text>
              </View>
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

export default Register