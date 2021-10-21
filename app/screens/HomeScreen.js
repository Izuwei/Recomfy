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
import geometry from "../constants/geometry";
import { HorizListItem as ListItem } from "../components/HorizListItem";

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

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          ListFooterComponent={
            <View style={{ height: geometry.navBarHeight }} />
          }
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
                renderItem={({ item }) => (
                  <ListItem navigation={navigation} item={item} />
                )}
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
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: colors.red,
  },
});

export default HomeScreen;
