import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import Details from "../screens/Details";
import Feed from "../screens/Feed";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { itemId: number };
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
    // the navigtor is outside all the screens
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Feed" component={Feed} />
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
