import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavBar from "./app/components/NavBar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <NavBar />
    </NavigationContainer>
  );
}
