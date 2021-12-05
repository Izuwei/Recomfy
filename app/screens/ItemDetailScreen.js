import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
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
import config from "../../config.json";
import {getUuid} from "../utils/uuid";
import {DataContext, DataProvider} from "../utils/DataProvider";


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


const ItemDetailScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { isFavorite, addFavorite, removeFavorite } = useContext(DataContext);

  const [similarContent, setSimilarContent] = useState([]);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite(route.params.data));

  const favoriteButton = () => {
    if(!isFavoriteState){
      addFavorite(route.params.data);
      setIsFavoriteState(true);
    }
    else {
      removeFavorite(route.params.data);
      setIsFavoriteState(false);
    }
  }
  const setSimilarFilms = async (title) => {
    try {
      const res = await axios.get(
        config.api_url + ":" + config.api_port + "/movies/similar/" + title.key
      );

      var data = [];
      res.data.forEach((item) => {
        data.push({
          key: item.id.toString(),
          type: title.type,
          title: item.name,
          image: item.image,
          description: item.overview,
          rating: item.rating + "/" + item.rating_top,
        });
      });
      setSimilarContent(data);
    } catch (err) {
      setSimilarContent([]);
    }
  };

  const setSimilarSerials = async (title) => {
    try {
      const res = await axios.get(
        config.api_url + ":" + config.api_port + "/serials/similar/" + title.key
      );

      var data = [];
      res.data.forEach((item) => {
        data.push({
          key: item.id.toString(),
          type: title.type,
          title: item.name,
          image: item.image,
          description: item.overview,
          rating: item.rating + "/" + item.rating_top,
        });
      });
      setSimilarContent(data);
    } catch (err) {
      setSimilarContent([]);
    }
  };

  useEffect(() => {
    switch (route.params.data.type) {
      case "movie":
        setSimilarFilms(route.params.data);
        break;
      case "serial":
        setSimilarSerials(route.params.data);
        break;
      default:
        setSimilarContent([]);
    }
  }, []);

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
            onPress={() => favoriteButton()}
            theme={theme}
            /** FIXME: check if it is in "seen" list and replace 'true'*/
            color={!isFavoriteState ? theme.green : theme.red}
            icon={!isFavoriteState ? AddIcon : RemoveIcon}
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
          data={similarContent}
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
