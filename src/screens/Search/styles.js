import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: Colors.primary
  },
  headerBox: {
    backgroundColor: "white",
    height: 60,
    marginTop: -30,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.primary,
    borderRadius: 12,
    gap: 12
  },
  container: {
    padding: 16,
  }
});

export default styles;