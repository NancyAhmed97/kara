import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import RateByNumbers from "../components/MyBookings/RateByNumbers";
import RateByFace from "../components/MyBookings/RateByFace";
import { TouchableOpacity } from "react-native";
import { Colors } from "../Constants/Colors";
import { TextInput } from "react-native";

const RateScreen = () => {
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={{
              uri: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Knight Giza Pyramids</Text>
            <Text style={styles.date}>29 Jan - 30 Jan</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            gap: 8,
            marginBottom: 8,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Rate Your Stay</Text>
          <RateByNumbers title={"How was your stay?"} />
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            gap: 8,
            marginBottom: 8,
          }}
        >
          <View style={{ paddingHorizontal: 12 }}>
            <RateByFace title={"How was the crew?"} />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <RateByFace title={"How were the facilities?"} />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <RateByFace title={"Was it clean?"} />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <RateByFace title={"Was it comfortable?"} />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <RateByFace title={"Was it good value for money?"} />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <RateByFace title={"What was the location like?"} />
          </View>
        </View>

        <View
          style={{
            padding: 8,
            backgroundColor: "white",
            marginBottom: 8,
            gap: 8,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Tell us about your trip</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Feedback"
              style={styles.inputStyle}
              numberOfLines={3}
            />
          </View>
        </View>

        <View style={{ padding: 8, backgroundColor: "white" }}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RateScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    color: "white",
  },
  textContainer: {
    position: "absolute",
    bottom: 8,
    left: 9,
  },
  btnStyle: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    padding: 8,
  },
  btnTextStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  inputContainer: {
    borderWidth: 0.5,
    padding: 4,
    borderColor: "gray",
    borderRadius: 8,
  },
  inputStyle: {},
});
