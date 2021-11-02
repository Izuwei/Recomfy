import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import geometry from "../constants/geometry";
import AddIcon from "../assets/icons/plus-icon.png";
import RemoveIcon from "../assets/icons/remove-icon.png";
import { ThemeContext } from "../utils/ThemeProvider";
import { HorizListItem as ListItem } from "../components/HorizListItem";

const FavoriteButton = ({ onPress, theme, text, color, icon }) => (
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
          tintColor: theme.white,
        }}
      />
      <Text style={{ color: theme.white }}>{text}</Text>
    </View>
  </TouchableOpacity>
);

/** Dummy */
const fetchSimilarContent = () => {
  return [
    {
      key: "1",
      title: "Ice Age 2",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_iceagethemeltdown_21384_0b4f5877.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "2",
      title: "Ice Age 3",
      image:
        "https://cdn.knihcentrum.cz/6849979_ice-age-3-dawn-of-the-dinosaurs-cd.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "3",
      title: "Ice Age 4",
      image:
        "https://smartcdkeys.com/image/data/products/ice-age-4-continental-drift-arctic-games/cover/ice-age-4-continental-drift-arctic-games-smartcdkeys-cheap-cd-key-cover.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "4",
      title: "Ice Age 5",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzFjYWM5NzgtMGIwMi00MmE3LWE3NTgtNmIwMmRkNmFmYzJkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
    {
      key: "5",
      title: "Finding Nemo",
      image: "https://filmtoro.cz/img/film/zjqInUwldOBa0q07fOyohYCWxWX.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
      rating: "8/10",
    },
  ];
};

const ItemDetailScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { flexDirection: "column" }]}>
      <View style={styles.row}>
        <View
          style={[styles.line, { flex: 1, backgroundColor: theme.primary }]}
        />
        <Text style={[styles.title, { color: theme.primary }]}>
          {route.params.data.title}
        </Text>
        <View
          style={[styles.line, { flex: 1, backgroundColor: theme.primary }]}
        />
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
          <Text style={[styles.rating, { color: theme.primary }]}>
            {route.params.data.rating}
          </Text>
          <FavoriteButton
            onPress={() => null}
            theme={theme}
            /** FIXME: check if it is in "seen" list and replace 'true'*/
            color={true ? theme.green : theme.red}
            icon={true ? AddIcon : RemoveIcon}
            text={t("Favorites").toUpperCase()}
          />
        </View>
      </View>
      <View>
        <Text style={{ color: theme.text }}>
          {route.params.data.description}
        </Text>
      </View>
      <View>
        <View style={[styles.row, { marginTop: 15 }]}>
          <View
            style={[
              styles.line,
              { flex: 0.05, backgroundColor: theme.primary },
            ]}
          />
          <Text style={[styles.sectionTitle, { color: theme.primary }]}>
            {t("SimilarTitles")}
          </Text>
          <View
            style={[
              styles.line,
              { flex: 0.95, backgroundColor: theme.primary },
            ]}
          />
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
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  sectionTitle: {
    marginRight: 10,
    marginLeft: 10,
    fontWeight: "800",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  line: {
    height: 1.5,
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
  },
});

export default ItemDetailScreen;
