import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { ThemeContext } from "../utils/ThemeProvider";
import { DataContext } from "../utils/DataProvider";
import {
  HomeScreenNavigator,
  SearchScreenNavigator,
  GalleryScreenNavigator,
} from "./StackNavigation";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
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

const BigButton = ({ children, onPress, color }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: color,
        ...styles.shadow,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const NavBar = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
      text: theme.text,
    },
  };

  const screenOptions = {
    headerShown: false, // Header disabled
    tabBarShowLabel: false,
    tabBarStyle: [
      {
        backgroundColor: theme.navigationBottom,
        position: "absolute",
        bottom: 20,
        left: 15,
        right: 15,
        elevation: 0,
        borderRadius: 15,
        height: 65,
        ...styles.shadow,
      },
    ],
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigator}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("Home", { screen: "HomeScreen" });
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 2,
                }}
              >
                <Image
                  source={require("../assets/icons/home-icon.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? theme.primary : theme.disabled,
                  }}
                />
                <Text
                  style={{
                    color: focused ? theme.primary : theme.disabled,
                    fontSize: 12,
                  }}
                >
                  {t("Home").toUpperCase()}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreenNavigator}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("Search", { screen: "SearchScreen" });
            },
          })}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../assets/icons/search-icon.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: theme.white,
                }}
              />
            ),
            tabBarButton: (props) => (
              <BigButton color={theme.primary} {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreenNavigator}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("Gallery", { screen: "GalleryScreen" });
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 2,
                }}
              >
                <Image
                  source={require("../assets/icons/favorites-icon.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? theme.primary : theme.disabled,
                  }}
                />
                <Text
                  style={{
                    color: focused ? theme.primary : theme.disabled,
                    fontSize: 12,
                  }}
                >
                  {t("Favorites").toUpperCase()}
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavBar;
