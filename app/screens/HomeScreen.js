import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import colors from "../constants/colors";

const ListButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={require("../assets/icons/list-icon.png")}
      resizeMode="contain"
      style={{
        width: 23,
        height: 23,
        marginLeft: 5,
        tintColor: colors.red,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  </TouchableOpacity>
);

const HomeScreen = ({ navigation, route }) => {
  const SECTIONS = [
    {
      title: "Films",
      data: route.params.films,
    },
    {
      title: "Serials",
      data: route.params.serials,
    },
    {
      title: "Books",
      data: route.params.books,
    },
    {
      title: "Games",
      data: route.params.games,
    },
    {
      title: "Anime",
      data: route.params.anime,
    },
    {
      title: "Manga",
      data: route.params.manga,
    },
  ];

  const ListItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ItemDetailScreen", {
            title: item.text,
            data: item,
          })
        }
      >
        <View style={styles.item}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.sectionHeader}>{section.title}</Text>
                <View style={styles.line} />
                <ListButton
                  onPress={() =>
                    navigation.navigate("GalleryScreen", {
                      data: route.params,
                      initialRouteName: section.title,
                    })
                  }
                />
              </View>

              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={() => null}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  sectionHeader: {
    marginRight: 10,
    fontWeight: "800",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.red,
    marginBottom: 5,
    textAlign: "center",
  },
  item: {
    margin: 5,
    elevation: 3,
    shadowColor: "black",
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
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.red,
  },
});

export default HomeScreen;
