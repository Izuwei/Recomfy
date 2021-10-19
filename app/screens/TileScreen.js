import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

import colors from "../constants/colors";

const TileScreen = ({ navigation, route }) => {
  return (
    <FlatGrid
      itemDimension={130}
      data={route.params.data}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ItemDetailScreen", {
              title: item.text,
              data: item,
            })
          }
        >
          <ImageBackground
            source={{ uri: item.uri }}
            style={styles.itemContainer}
            imageStyle={{ borderRadius: 5 }}
            resizeMode="cover"
          >
            <View style={styles.titleBG}>
              <Text style={styles.itemName}>{item.text}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    height: 150,
  },
  titleBG: {
    backgroundColor: "rgba(0, 0, 0, .8)",
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  itemName: {
    fontSize: 16,
    margin: 5,
    color: colors.white,
    fontWeight: "600",
  },
});

export default TileScreen;
