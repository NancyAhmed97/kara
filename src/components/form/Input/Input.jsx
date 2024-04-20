import { Text, TextInput, View } from "react-native";
import styles from "./styles";

const Input = ({
  labelText = null,
  labelTextStyles = {},
  // actions
  onChange,
  onBlur,
  onPressIn,
  inputContainerStyles = { paddingHorizontal: 12 },
  inputStyles = {},
  placeholder,
  prefix = null,
  postfix = null,
  secureTextEntry = false
}) => {
  return (
    <View style={styles.container}>
      {labelText && (
        <Text style={[styles.labelText, labelTextStyles]}>
          {labelText}
        </Text>
      )}
      <View style={[styles.inputContainer, inputContainerStyles]}>
        {prefix}
        <TextInput
          style={[styles.input, inputStyles]}
          onPressIn={onPressIn}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
        {postfix}
      </View>
    </View>
  )
}

export default Input