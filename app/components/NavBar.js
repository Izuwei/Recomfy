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

const screenOptionStyle = {
  headerShown: false, // Header disabled
  headerTitleAlign: "center",
  tabBarShowLabel: false,
  headerTitleStyle: {
    fontSize: 25,
  },
  headerStyle: {
    backgroundColor: colors.red,
  },
  headerTintColor: colors.white,
  headerBackTitle: "",
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
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        initialParams={recommendations}
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
