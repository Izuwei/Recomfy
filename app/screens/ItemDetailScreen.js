import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import colors from "../constants/colors";
import geometry from "../constants/geometry";
import AddIcon from "../assets/icons/plus-icon.png";
import RemoveIcon from "../assets/icons/remove-icon.png";
import { HorizListItem as ListItem } from "../components/HorizListItem";

const FavoriteButton = ({ onPress, text, color, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        margin: 10,
        padding: 8,
        borderRadius: 7,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          marginRight: 5,
          tintColor: colors.white,
        }}
      />
      <Text style={{ color: colors.white }}>{text}</Text>
    </View>
  </TouchableOpacity>
);

/** Dummy */
const fetchSimilarContent = () => {
  return [
    {
      key: "1",
      title: "Anime 1",
      image: "https://picsum.photos/id/1011/200",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      title: "Anime 2",
      image: "https://picsum.photos/id/1012/200",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "3",
      title: "Anime 3",
      image: "https://picsum.photos/id/1013/200",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      title: "Anime 4",
      image: "https://picsum.photos/id/1015/200",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      title: "Anime 5",
      image: "https://picsum.photos/id/1016/200",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
  ];
};

const ItemDetailScreen = ({ navigation, route }) => {
  return (
    <ScrollView style={[styles.container, { flexDirection: "column" }]}>
      <View style={styles.row}>
        <View style={styles.line} />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <View style={styles.line} />
      </View>
      <View style={[styles.container, { flexDirection: "row" }]}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: route.params.data.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.rating}>{route.params.data.rating}</Text>
          <FavoriteButton
            onPress={() => null}
            /** FIXME: check if it is in "seen" list and replace 'true'*/
            color={true ? colors.green : colors.red}
            icon={true ? AddIcon : RemoveIcon}
            text={true ? "ADD TO FAVORITES" : "REMOVE FROM FAVORITES"}
          />
        </View>
      </View>
      <View>
        <Text>{route.params.data.description}</Text>
      </View>
      <View>
        <View style={[styles.row, { marginTop: 15 }]}>
          <Text style={styles.sectionTitle}>Similar titles</Text>
          <View style={styles.line} />
        </View>
        <FlatList
          horizontal
          data={fetchSimilarContent()}
          renderItem={({ item }) => (
            <ListItem navigation={navigation} item={item} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ height: geometry.navBarHeight }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: colors.red,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  sectionTitle: {
    marginRight: 10,
    fontWeight: "800",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.red,
    marginBottom: 5,
    textAlign: "center",
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: colors.red,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 7,
  },
  imageContainer: {
    flexBasis: 150,
    flexShrink: 1,
  },
  infoContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    flexBasis: 200,
    flexGrow: 1,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 5,
  },
  rating: {
    fontSize: 36,
    fontWeight: "900",
    color: colors.red,
  },
});

export default ItemDetailScreen;
