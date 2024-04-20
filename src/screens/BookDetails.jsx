import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "../Constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import RateStars from "../components/ui/RateStars";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import IconTitle from "../components/MyBookings/IconTitle";
import { useCallback } from "react";

const BookDetails = ({ navigation }) => {
  const handleRate = useCallback(() => {
    navigation.navigate("rate");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.titleStyle}>Reserve your accommodation</Text>

          <View style={styles.confirmContainer}>
            <View>
              <Text style={{ fontSize: 12 }}>Confirmation Number:</Text>
              <Text style={{ fontWeight: "500", fontSize: 12 }}>415595665</Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }}>Serial Number:</Text>
              <Text style={{ fontWeight: "500", fontSize: 12 }}>3902</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginVertical: 4,
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
            onPress={handleRate}
          >
            <AntDesign name="smileo" size={18} color={"blue"} />
            <Text style={{ color: "blue" }}>Rate your accommodation</Text>
          </TouchableOpacity>
          <View style={{ gap: 8 }}>
            <Text style={styles.name}>Knight Giza pyramids</Text>
            <RateStars rate={3} size={15} />
            <View style={{ marginVertical: 12, gap: 8 }}>
              <IconTitle
                title={"29 Jan to 30 Jan"}
                icon={"calendar"}
                links={[]}
                texts={[
                  "Street name, State, Egypt",
                  "left at : 1:00 am to 11:00 pm",
                ]}
              />
              <IconTitle
                title={"Accommodation Adress"}
                icon={"location"}
                links={["Get Directions"]}
                texts={["Street name, State, Egypt"]}
              />

              <IconTitle
                title={"Accommodation facilities and policies"}
                icon={"bed-outline"}
                links={["Show All"]}
                texts={[]}
              />
            </View>
            <View style={styles.seperator} />
            <View style={{ marginVertical: 12, gap: 8 }}>
              <IconTitle
                title={"Contact"}
                icon={"chatbubbles-outline"}
                links={["Send Message"]}
              />
              <IconTitle
                title={"Other methods of communication"}
                icon={"logo-whatsapp"}
                links={["Call +02011574265", "Text by mail"]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 8,
    gap: 8,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "700",
  },
  confirmContainer: {
    padding: 16,
    borderWidth: 0.5,
    backgroundColor: "silver",
    borderColor: "gray",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primary,
  },
  seperator: {
    width: "90%",
    alignSelf: "center",
    height: 1,
    backgroundColor: "silver",
  },
});

export default BookDetails;
