import React, { useContext } from "react";
import { FlatGrid } from "react-native-super-grid";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import measures from "../constants/measures";
import { ThemeContext } from "../utils/ThemeProvider";

const TileGrid = ({ navigation, data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <FlatGrid
      itemDimension={100}
      data={data}
      style={styles.gridView}
      ListFooterComponent={<View style={{ height: measures.navBarHeight }} />}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ItemDetailScreen", {
              title: item.title,
              data: item,
            })
          }
        >
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.itemContainer}
            imageStyle={{ borderRadius: 5 }}
            resizeMode="cover"
          >
            <View style={styles.titleBG}>
              <Text style={[styles.itemName, { color: theme.white }]}>
                {item.title}
              </Text>
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
    elevation: 3,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  titleBG: {
    backgroundColor: "rgba(0, 0, 0, .8)",
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  itemName: {
    fontSize: 16,
    margin: 4,
    fontWeight: "600",
  },
});

export default TileGrid;
