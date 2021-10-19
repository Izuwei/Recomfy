import React from "react";
import { Text } from "react-native";

const ItemDetailScreen = ({ route }) => {
  return <Text>{route.params.data.text}</Text>;
};

export default ItemDetailScreen;
