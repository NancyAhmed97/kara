import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import BottomTabsNavigation from "./BottomTabsNavigation";
import SearchScreen from "../screens/Search/SearchScreen";
import Login from "../screens/Auth/Login";
import SliderScreen from "../screens/SliderScreen";

import ProfileScreen from "../screens/Profile/ProfileScreen";
import PersonalInfoScreen from "../screens/Profile/PersonalInfo/PersonalInfoScreen";
import EditProfile from "../screens/ListScreens/EditProfile";
import SecurityScreen from "../screens/ListScreens/SecurityScreen";

import CheckoutScreen from "../screens/Checkout/CheckoutScreen";
import BookDetails from "../screens/BookDetails";
import { Colors } from "../Constants/Colors";
import RateScreen from "../screens/RateScreen";
import Register from "../screens/Auth/Register";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="register">
        {/* // auth routes */}
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="bottomTabs"
          component={BottomTabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="details"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="search"
          component={SearchScreen}
          options={{
            headerShown: false
            // title: "Search Results",
          }}
        />
        <Stack.Screen
          name="checkout"
          component={CheckoutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="slider"
          component={SliderScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="personalInfo"
          component={PersonalInfoScreen}
          options={{ title: "Personal Information" }}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{ title: "Profile Info" }}
        />
        <Stack.Screen
          name="security"
          component={SecurityScreen}
          options={{ title: "Security" }}
        />
        <Stack.Screen
          name="bookDetails"
          component={BookDetails}
          options={{
            title: "Book Details",
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="rate"
          component={RateScreen}
          options={{
            title: "Rate",
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
