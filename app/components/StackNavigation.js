import React, { memo, useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../utils/ThemeProvider";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import SearchScreen from "../screens/SearchScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { DataContext } from "../utils/DataProvider";

const Stack = createStackNavigator();

const screenOptions = ({ navigation }, theme) => ({
  headerTitleStyle: {
    color: theme.white,
  },
  headerTitleAlign: "center",
  headerTintColor: theme.white,
  headerStyle: {
    backgroundColor: theme.primary,
  },
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
      <Image
        source={require("../assets/icons/settings-icon.png")}
        resizeMode="contain"
        style={{
          width: 23,
          height: 23,
          margin: 12,
          tintColor: theme.white,
        }}
      />
    </TouchableOpacity>
  ),
});

export const HomeScreenNavigator = memo((data) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={(navigation) => screenOptions(navigation, theme)}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: t("Home"),
        })}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={() => ({
          title: t("Recommendations"),
        })}
      />

      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: t("Details"),
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({
          title: t("Settings"),
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
});

export const GalleryScreenNavigator = memo(() => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { favorites } = useContext(DataContext);

  return (
    <Stack.Navigator
      screenOptions={(navigation) => screenOptions(navigation, theme)}
    >
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        initialParams={{ initialRouteName: "Films", data: favorites }}
        options={() => ({
          title: t("Favorites"),
        })}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: t("Details"),
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({
          title: t("Settings"),
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
});

export const SearchScreenNavigator = memo(() => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={(navigation) => screenOptions(navigation, theme)}
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          title: t("Search"),
        })}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: t("Details"),
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({
          title: t("Settings"),
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
});
