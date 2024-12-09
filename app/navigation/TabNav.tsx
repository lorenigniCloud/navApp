import Feed from "../screens/Feed";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import RootStackNavigation from "./RouteStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type TabsParamLit = {
  HomeTab: undefined;
  FeedTab: undefined;
};

const Tab = createBottomTabNavigator<TabsParamLit>();

const TabsNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={RootStackNavigation}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FeedTab"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNav;
