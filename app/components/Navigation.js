import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import SearchScreen from "../screens/SearchScreen";
import TileScreen from "../screens/TileScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";

const Stack = createStackNavigator();

export const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.white,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          title: "Home",
          headerStyle: {
            backgroundColor: colors.red,
          },
        })}
      />
      <Stack.Screen
        name="TileScreen"
        component={TileScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: colors.orange,
          },
        })}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: colors.blue,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export const GalleryScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.white,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={() => ({
          title: "Gallery",
          headerStyle: {
            backgroundColor: colors.blue,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export const SearchScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.white,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          title: "Search",
          headerStyle: {
            backgroundColor: colors.blue,
          },
        })}
      />
    </Stack.Navigator>
  );
};
