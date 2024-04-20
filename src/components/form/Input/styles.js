import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  labelText: {
    paddingBottom: 6,
    textTransform: "capitalize"
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 12
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flex: 1,
  }
});

export default styles;