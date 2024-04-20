import { View, Text, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  BookingScreen,
  ExploreScreen,
  MailboxScreen,
  FavouriteScreen,
  MyBookingsScreen,
} from "../screens/BottomTabsScreens/Index.js";
import { Colors } from "../Constants/Colors.js";

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: "MyBookings",
    component: MyBookingsScreen,
    icon: "gift-outline",
    iconFocused: "gift",
    label: "My Bookings",
  },
  {
    name: "inbox",
    component: MailboxScreen,
    icon: "mail-outline",
    iconFocused: "mail",
    label: "Inbox",
  },
  {
    name: "Favourite",
    component: FavouriteScreen,
    icon: "heart-outline",
    iconFocused: "heart",
    label: "Favourite",
    title: "Wish List",
  },
  // {
  //   name: "Explore",
  //   component: ExploreScreen,
  //   icon: "search-outline",
  //   iconFocused: "search",
  //   label: "Explore",
  // },
];

const screenOptions = {
  tabBarStyle: {
    padding: 5,
  },
};

const BottomTabsNavigation = ({ navigation }) => {
  const handleOnProfilePress = () => {
    navigation.navigate("profile");
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          title: "Kara",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "900",
            color: Colors.primary,
          },
          headerTitleAlign: "left",
          headerRight: (props) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginEnd: 16,
                gap: 12,
              }}
            >
              <Ionicons name="globe" size={22} />
              <TouchableOpacity
                onPress={handleOnProfilePress}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,

                  borderColor: Colors.primary,
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 25, height: 25, borderRadius: 15 }}
                  source={{
                    uri: "https://www.w3schools.com/howto/img_avatar.png",
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: (props) => (
            <TabBarIcon
              iconName="search-outline"
              iconNameFocused="search"
              {...props}
            />
          ),
          tabBarLabel: (props) => <TabBarLabel label="Booking" {...props} />,
        }}
      />
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index.toString()}
          name={tab.label}
          component={tab.component}
          options={{
            tabBarIcon: (props) => (
              <TabBarIcon
                iconName={tab.icon}
                iconNameFocused={tab.iconFocused}
                {...props}
              />
            ),
            tabBarLabel: (props) => (
              <TabBarLabel label={tab.label} {...props} />
            ),
            title: tab.title ?? tab.label,
            headerTitleStyle: { color: Colors.primary },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;

const TabBarIcon = ({ tintColor, focused, iconName, iconNameFocused }) => (
  <Ionicons
    name={focused ? iconNameFocused : iconName}
    size={focused ? 25 : 23}
    //  style={iconStyle}
    color={Colors.primary}
  />
);

const TabBarLabel = ({ tintColor, focused, label }) => (
  <Text
    style={{
      color: Colors.primary,
      fontSize: 12,
      textAlign: "center",
      paddingVertical: 2,
      //  fontWeight: focused ? "900" : "500",
      fontWeight: focused ? "bold" : "400",
    }}
  >
    {label}
  </Text>
);
