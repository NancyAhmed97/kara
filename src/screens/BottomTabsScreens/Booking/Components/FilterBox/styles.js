import { StyleSheet } from "react-native";
import { Colors } from "../../../../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },
  searchButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 12,
    alignItems: "center",
    borderRadius: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textTransform: "capitalize"
  },
  dateModalTitle: {
    textAlign: "right",
    fontSize: 22,
    textTransform: "capitalize",
    marginBottom: 16
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 6
  }
});

export default styles;