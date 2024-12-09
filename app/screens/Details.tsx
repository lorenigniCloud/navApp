import { Text, View } from "react-native";

import { DetailsageProps } from "../navigation/RouteStack";
import React from "react";

const Details = ({ navigation, route }: DetailsageProps) => {
  const { itemId } = route.params;
  return (
    <View>
      <Text>Details: {itemId}</Text>
    </View>
  );
};

export default Details;
