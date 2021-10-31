import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import SearchScreen from "../screens/SearchScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

const screenOptions = ({ navigation }) => ({
  headerTitleStyle: {
    color: colors.white,
  },
  headerTitleAlign: "center",
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.red,
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
          tintColor: colors.white,
        }}
      />
    </TouchableOpacity>
  ),
});

export const HomeScreenNavigator = (data) => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={data.route.params}
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
};

export const GalleryScreenNavigator = (data) => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        initialParams={{ initialRouteName: "Films", data: data.route.params }}
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
};

export const SearchScreenNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
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
};
