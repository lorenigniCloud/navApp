import { Button, View } from "react-native";

import { HomePageProps } from "../navigation/RouteStack";
import React from "react";

const Home = ({ navigation }: HomePageProps) => {
  // hook to navigate for all children of Navigation Container.
  // But it's bettr to pass as a prop of the component
  //   const navigation = useNavigation<any>();
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
    </View>
  );
};

export default Home;
