import { Button, Text, View } from "react-native";

import { ProfilePageProps } from "../navigation/RouteStack";
import React from "react";

const Profile = ({ navigation }: ProfilePageProps) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
