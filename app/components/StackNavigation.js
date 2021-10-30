import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

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
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={data.route.params}
        options={({ navigation }) => ({
          title: "Home",
        })}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={() => ({
          title: "Recommendations",
        })}
      />

      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: "Details",
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({
          title: "Settings",
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
};

export const GalleryScreenNavigator = (data) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        initialParams={{ initialRouteName: "Films", data: data.route.params }}
        options={() => ({
          title: "Favorites",
        })}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: "Details",
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({
          title: "Settings",
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
};

export const SearchScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          title: "Search",
        })}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: "Details",
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => ({
          title: "Settings",
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
};
