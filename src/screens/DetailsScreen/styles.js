import { StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  appBarActionsContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  appBarActionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    textTransform: "capitalize",
    paddingVertical: 22,
    fontSize: 22,
  },
  reviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
  reviewsCountContainer: {
    flex: 1,
    alignItems: "center",
    gap: 8,
  },
  reviewsTitle: {
    fontSize: 35,
  },
  reviewsCount: {},
  reviewsRateContainer: {
    flex: 3,
  },
  reviewsLineContainer: {
    flexDirection: "row",
    gap: 12,
  },
  reviewsRateLine: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
    position: "relative",
  },
  reviewsRateLineActive: {
    position: "absolute",
    height: 10,
    width: 200,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    top: 0,
    left: 20,
  },
  seperatorStyle: {
    height: 1,
    width: "80%",
    backgroundColor: "gray",
    alignSelf: "center",
    marginVertical: 12,
    borderRadius: 20,
  },
  footerStyle: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "gray",
    justifyContent: "space-around",
  },
});

export default styles;
