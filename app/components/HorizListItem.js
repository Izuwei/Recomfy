import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { ThemeContext } from "../utils/ThemeProvider";

const HorizListItem = ({ navigation, item }) => {
  const { theme } = useContext(ThemeContext);

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
        <Text style={[styles.itemText, { color: theme.text }]}>
          {item.title}
        </Text>
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
    marginTop: 5,
  },
});

export { HorizListItem };
