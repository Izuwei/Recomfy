import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../constants/colors";

const HorizListItem = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ItemDetailScreen", {
          title: item.title,
          data: item,
        })
      }
    >
      <View style={styles.item}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    elevation: 3,
    shadowColor: "black", // FIXME: Shadow issues?
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  itemPhoto: {
    width: 100,
    height: 130,
    borderRadius: 5,
  },
  itemText: {
    color: colors.gray,
    marginTop: 5,
  },
});

export { HorizListItem };
