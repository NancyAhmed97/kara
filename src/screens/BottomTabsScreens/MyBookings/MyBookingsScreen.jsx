import { useCallback, useMemo, useState } from "react";

import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";
import HeaderTabs from "../../../components/MyBookings/HeaderTabs";
import NoBookings from "../../../components/MyBookings/NoBookings";
import MyBookingCard from "../../../components/ui/MyBookingCard";

const MyBookingsScreen = ({ navigation }) => {
  const tabs = useMemo(
    () => [
      {
        key: 1,
        label: "now",
      },
      {
        key: 2,
        label: "progress",
      },
      {
        key: 3,
        label: "canceled",
      },
    ],
    []
  );

  const [activeStatus, setActiveStatus] = useState(1);

  const handleTabChange = useCallback((key) => {
    setActiveStatus(key);
  }, []);
  return (
    <View style={styles.container}>
      <HeaderTabs tabs={tabs} defaultTab={1} onChange={handleTabChange} />
      {activeStatus === 1 ? (
        <NoBookings />
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("bookDetails");
            }}
            style={{ marginVertical: 4 }}
          >
            <MyBookingCard />
          </TouchableOpacity>
          <View style={{ marginVertical: 4 }}>
            <MyBookingCard />
          </View>
          <View style={{ marginVertical: 4 }}>
            <MyBookingCard />
          </View>
        </View>
      )}
    </View>
  );
};

export default MyBookingsScreen;
