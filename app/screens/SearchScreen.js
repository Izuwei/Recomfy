import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import colors from "../constants/colors";
import TileGrid from "../components/TileGrid";

const SearchButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: colors.red,
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
          tintColor: colors.white,
        }}
      />
    </View>
  </TouchableOpacity>
);

const SearchScreen = ({ navigation, route }) => {
  const [titleName, setTitleName] = useState("");
  const [category, setCategory] = useState("films");

  const [results, setResults] = useState([]);

  /**Dummy */
  const search = () => {
    setResults([
      {
        key: "1",
        title: "Film 1",
        image: "https://picsum.photos/id/1/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "2",
        title: "Film 2",
        image: "https://picsum.photos/id/10/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },

      {
        key: "3",
        title: "Film 3",
        image: "https://picsum.photos/id/1002/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "4",
        title: "Film 4",
        image: "https://picsum.photos/id/1006/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "5",
        title: "Film 5",
        image: "https://picsum.photos/id/1008/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "6",
        title: "Film 6",
        image: "https://picsum.photos/id/1/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "7",
        title: "Film 7",
        image: "https://picsum.photos/id/10/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },

      {
        key: "8",
        title: "Film 8",
        image: "https://picsum.photos/id/1002/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "9",
        title: "Film 9",
        image: "https://picsum.photos/id/1006/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
      {
        key: "10",
        title: "Film 10",
        image: "https://picsum.photos/id/1008/200",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum. Nullam sit amet magna in magna gravida vehicula. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Nam quis nulla. Vivamus porttitor turpis ac leo. Vivamus ac leo pretium faucibus. Phasellus rhoncus. Fusce wisi. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.",
        rating: "8/10",
      },
    ]);
    return;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <View style={{ flex: 0.25 }}>
          <Text style={styles.label}>Name:</Text>
        </View>
        <View style={{ flex: 0.75, alignItems: "center" }}>
          <TextInput
            style={styles.input}
            onChange={setTitleName}
            placeholder="Title name"
          />
        </View>
      </View>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <View style={{ flex: 0.25 }}>
          <Text style={styles.label}>Category:</Text>
        </View>
        <View
          style={{
            flex: 0.75,
            alignItems: "center",
            borderBottomWidth: 1,
            padding: 2,
          }}
        >
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            style={{ width: "100%", textAlign: "center" }}
          >
            <Picker.Item label="Films" value="films" />
            <Picker.Item label="Serials" value="serials" />
            <Picker.Item label="Books" value="books" />
            <Picker.Item label="Games" value="games" />
            <Picker.Item label="Anime" value="anime" />
            <Picker.Item label="Manga" value="manga" />
          </Picker>
        </View>
      </View>
      <View />
      <View style={styles.row}>
        <View style={[styles.line, { flex: 0.8 }]} />
        <SearchButton onPress={() => search()} />
        <View style={[styles.line, { flex: 0.2 }]} />
      </View>
      <TileGrid navigation={navigation} data={results} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 7,
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
    margin: 12,
    borderBottomWidth: 1,
    padding: 5,
  },
  line: {
    height: 2,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: colors.red,
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
