import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { ThemeContext } from "../utils/ThemeProvider";
import TileGrid from "../components/TileGrid";
import config from "../../config.json";

const SearchButton = ({ onPress, theme }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: theme.primary,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
    >
      <Image
        source={require("../assets/icons/search-icon.png")}
        resizeMode="contain"
        style={{
          width: 35,
          height: 35,
          tintColor: theme.white,
        }}
      />
    </View>
  </TouchableOpacity>
);

const SearchScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [titleName, setTitleName] = useState("");
  const [category, setCategory] = useState("films");

  const [results, setResults] = useState([]);

  const search = async () => {
    Keyboard.dismiss();
    const name = titleName.replace(/\s+/g, "+");

    axios
      .get("http://localhost:8080/games/search", {
        params: {
          name: name,
        },
      })
      .then((res) => {
        const response = res.data;

        let data = [];

        response.forEach((title) => {
          data.push({
            key: title.id,
            title: title.name,
            image: title.image,
            description: "",
            rating: title.rating + "/" + title.ratingTop,
          });
        });

        setResults(data);
      })
      .catch((err) => setResults([]));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <View style={{ flex: 0.25 }}>
          <Text style={[styles.label, { color: theme.text }]}>
            {t("Name") + ":"}
          </Text>
        </View>
        <View style={{ flex: 0.75, alignItems: "center" }}>
          <TextInput
            style={[
              styles.input,
              { color: theme.text, borderColor: theme.text },
            ]}
            onChangeText={setTitleName}
            value={titleName}
            placeholder={t("TitleName")}
            placeholderTextColor={theme.placeholder}
          />
        </View>
      </View>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <View style={{ flex: 0.25 }}>
          <Text style={[styles.label, { color: theme.text }]}>
            {t("Category") + ":"}
          </Text>
        </View>
        <View
          style={{
            flex: 0.75,
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: theme.text,
            margin: 2,
          }}
        >
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            style={{
              width: "100%",
              height: 30,
              textAlign: "center",
              color: theme.text,
            }}
          >
            <Picker.Item label={t("Films")} value="films" />
            <Picker.Item label={t("Serials")} value="serials" />
            <Picker.Item label={t("Books")} value="books" />
            <Picker.Item label={t("Games")} value="games" />
            <Picker.Item label={t("Anime")} value="anime" />
            <Picker.Item label={t("Manga")} value="manga" />
          </Picker>
        </View>
      </View>
      <View />
      <View style={styles.row}>
        <View
          style={[styles.line, { flex: 0.8, backgroundColor: theme.primary }]}
        />
        <SearchButton onPress={() => search()} theme={theme} />
        <View
          style={[styles.line, { flex: 0.2, backgroundColor: theme.primary }]}
        />
      </View>
      <TileGrid navigation={navigation} data={results} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    textAlign: "right",
    marginRight: 16,
    fontWeight: "bold",
  },
  input: {
    fontSize: 16,
    height: 30,
    width: "100%",
    margin: 5,
    borderBottomWidth: 1,
    padding: 5,
  },
  line: {
    height: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default SearchScreen;
