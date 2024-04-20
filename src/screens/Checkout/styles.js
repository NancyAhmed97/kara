import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: Colors.primary,
    padding: 16,
  },
  topBarActionButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16
  },
  topBarActionButtonText: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
    fontWeight: "bold"
  },
  topTabsContainer: {
    paddingTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabItemContainer: {
    flexDirection: "column",
    alignItems: "center",
    opacity: .6,
  },
  tabItemContainerActive: {
    opacity: 1,
  },
  tabItemText: {
    paddingTop: 6,
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 16
  },
  container: {
    flex: 1
  },
});

export default styles;