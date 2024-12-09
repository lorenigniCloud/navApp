import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import Details from "../screens/Details";
import DrawNav from "./DrawNav";
import Feed from "../screens/Feed";
import Home from "../screens/Home";
import Modal from "../screens/Modal";
import Profile from "../screens/Profile";

type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { itemId: number };
  Drawer: undefined;
  Modal: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type ProfilePageProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;
export type DetailsageProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
export type FeedPageProps = NativeStackScreenProps<RootStackParamList, "Feed">;

const RootStackNavigation = () => {
  // Define the layout
  return (
    // the navigtor is outside all the screens and you can directly customize it
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#fff",
        }}
      >
        {/* You can customize the style at the screen level */}
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ title: "You Home" }}
        />
        <RootStack.Screen name="Feed" component={Feed} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Details" component={Details} />
        <RootStack.Screen
          name="Drawer"
          component={DrawNav}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Modal" component={Modal} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
