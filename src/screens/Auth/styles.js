import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  passwordIcon: {
    paddingEnd: 12
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
  },
  hint: {
    marginTop: 12,
    textAlign: "right",
    color: "#777"
  },
  socialBtn: {
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24
  },
  actionHint: {
    marginTop: 24,
    flexDirection: "row",
    gap: 6
  },
  actionHintText: {
    textTransform: "capitalize",
    fontSize: 15,
    letterSpacing: .5
  },
  orContainer: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: 16,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 34
  },
  orText: {
    textAlign: "center",
    marginBottom: -9,
    fontSize: 16,
    textTransform: "uppercase",
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 5
  }
});

export default styles;