import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ListRow from "../../components/ListRow/ListRow";
import Logout from "./Actions/Logout";

const ProfileScreen = ({ navigation }) => {
  const [showLogout, setShowLogout] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.userData}>
            <Image
              source={{
                uri: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
              }}
              style={styles.profileImage}
            />
            <View
              style={{
                marginHorizontal: 7,
                justifyContent: "center",
              }}
            >
              <Text style={styles.userName}>Ahmed Anas</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <Text style={{ color: "#666" }}>
                  259,54.00
                </Text>
                <TouchableOpacity>
                  <Feather name="edit-2" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <MaterialIcons name={"arrow-forward-ios"} size={20} color="#222" />
        </View>
        <View style={styles.seperatorStyle} />
        <Text style={{ fontSize: 20, fontWeight: "500", marginVertical: 16 }}>
          Settings
        </Text>
        <View style={{}}>
          <ListRow
            icon={<Feather name="user-plus" size={25} />}
            label="personal information"
            onPress={() => navigation.navigate("personalInfo")}
          />
          <ListRow
            icon={<Feather name="shield" size={25} />}
            label="security and login"
          />
          <ListRow
            icon={<Feather name="eye" size={25} />}
            label="change password"
          />
          <ListRow
            icon={<Feather name="log-out" size={25} />}
            label="logout"
            onPress={() => setShowLogout(true)}
          />
        </View>
      </View>
      {showLogout && (

        <Logout onClose={() => setShowLogout(false)} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userData: {
    flexDirection: "row",
    gap: 12,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: "stretch",
  },
  userName: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 3,
  },
  seperatorStyle: {
    height: 1,
    width: "100%",
    backgroundColor: "#e0dfdf",
    alignSelf: "center",
    marginVertical: 12,
    borderRadius: 20,
  },
});

export default ProfileScreen;
