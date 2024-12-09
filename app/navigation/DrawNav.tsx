import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import Feed from "../screens/Feed";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type DrawerStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

// create a customized content
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Reset Navigation"
        onPress={() => {
          props.navigation.goBack();
          console.log("pressed");
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawNav = () => {
  return (
    // personalize through drawerContent prop
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      {/* You can customizethe style at the screen level */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "You Home" }}
      />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawNav;
