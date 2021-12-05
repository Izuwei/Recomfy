import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
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

import geometry from "../constants/geometry";
import { HorizListItem as ListItem } from "../components/HorizListItem";
import { ThemeContext } from "../utils/ThemeProvider";

const ListButton = ({ onPress, theme }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={require("../assets/icons/list-icon.png")}
      resizeMode="contain"
      style={{
        width: 23,
        height: 23,
        marginLeft: 5,
        tintColor: theme.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  </TouchableOpacity>
);

const HomeScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

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
                <View
                  style={[
                    styles.line,
                    { flex: 0.05, backgroundColor: theme.primary },
                  ]}
                />
                <Text style={[styles.sectionHeader, { color: theme.primary }]}>
                  {t(section.title)}
                </Text>
                <View
                  style={[
                    styles.line,
                    { flex: 0.95, backgroundColor: theme.primary },
                  ]}
                />
                <ListButton
                  theme={theme}
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
  },
  sectionHeader: {
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
});

export default HomeScreen;
