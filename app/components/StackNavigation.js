import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import SearchScreen from "../screens/SearchScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";

const Stack = createStackNavigator();

export const HomeScreenNavigator = (data) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.white,
        },
        headerTitleAlign: "center",
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={data.route.params}
        options={() => ({
          title: "Home",
          headerStyle: {
            backgroundColor: colors.red,
          },
        })}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={() => ({
          title: "Recommendations",
          headerStyle: {
            backgroundColor: colors.red,
          },
        })}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: "Details",
          headerStyle: {
            backgroundColor: colors.red,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export const GalleryScreenNavigator = (data) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.white,
        },
        headerTitleAlign: "center",
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        initialParams={{ initialRouteName: "Films", data: data.route.params }}
        options={() => ({
          title: "Favorites",
          headerStyle: {
            backgroundColor: colors.red,
          },
        })}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={({ route }) => ({
          title: "Details",
          headerStyle: {
            backgroundColor: colors.red,
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
        headerTitleAlign: "center",
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          title: "Search",
          headerStyle: {
            backgroundColor: colors.red,
          },
        })}
      />
    </Stack.Navigator>
  );
};
