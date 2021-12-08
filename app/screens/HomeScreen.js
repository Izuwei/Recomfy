import React, { memo, useContext } from "react";
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

import measures from "../constants/measures";
import { HorizListItem as ListItem } from "../components/HorizListItem";
import { DataContext } from "../utils/DataProvider";
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

const HomeScreen = memo(({ navigation, route }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { recommendations } = useContext(DataContext);

  const SECTIONS = [
    {
      title: "Films",
      data: recommendations.films,
    },
    {
      title: "Serials",
      data: recommendations.serials,
    },
    {
      title: "Books",
      data: recommendations.books,
    },
    {
      title: "Games",
      data: recommendations.games,
    },
    {
      title: "Anime",
      data: recommendations.anime,
    },
    {
      title: "Manga",
      data: recommendations.manga,
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
            <View style={{ height: measures.navBarHeight }} />
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
                      data: recommendations,
                      initialRouteName: section.title,
                    })
                  }
                />
              </View>

              <FlatList
                horizontal
                data={section.data}
                style={{ marginBottom: -18 }}
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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    marginTop: 3,
    marginBottom: 8,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  line: {
    height: 1.5,
  },
});

export default HomeScreen;
