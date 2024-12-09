import { Button, View } from "react-native";
import React, { useLayoutEffect } from "react";

import { HomePageProps } from "../navigation/RouteStack";

const Home = ({ navigation }: HomePageProps) => {
  // hook to navigate for all children of Navigation Container.
  // But it's bettr to pass as a prop of the component
  //   const navigation = useNavigation<any>();

  //You can customizethe style at the component level
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Info" onPress={() => alert("Hello")} />,
    });
  }, []);

  return (
    <View>
      <Button
        title="Feed"
        onPress={() => {
          navigation.push("Feed");
        }}
      />
      <Button
        title="Open Profile"
        onPress={() => {
          navigation.push("Profile");
        }}
      />
      <Button
        title="Open Details"
        onPress={() => {
          navigation.push("Details", { itemId: 111 });
        }}
      />
      <Button
        title="Open Details"
        onPress={() => {
          navigation.push("Details", { itemId: 333 });
        }}
      />
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.navigate("Drawer");
        }}
      />
      <Button
        title="Open Modal"
        onPress={() => {
          navigation.navigate("Modal");
        }}
      />
    </View>
  );
};

export default Home;
