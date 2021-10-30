import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import colors from "../constants/colors";
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

const BigButton = ({ children, onPress }) => (
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
        backgroundColor: colors.red,
        ...styles.shadow,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const screenOptions = {
  headerShown: false, // Header disabled
  tabBarShowLabel: false,
  tabBarStyle: [
    {
      backgroundColor: colors.lightGray,
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

const NavBar = ({ recommendations, favorites }) => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        initialParams={recommendations}
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
                  tintColor: focused ? colors.red : colors.disabled,
                }}
              />
              <Text
                style={{
                  color: focused ? colors.red : colors.disabled,
                  fontSize: 12,
                }}
              >
                HOME
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
                tintColor: colors.white,
              }}
            />
          ),
          tabBarButton: (props) => <BigButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreenNavigator}
        initialParams={favorites}
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
                  tintColor: focused ? colors.red : colors.disabled,
                }}
              />
              <Text
                style={{
                  color: focused ? colors.red : colors.disabled,
                  fontSize: 12,
                }}
              >
                FAVORITES
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
