import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";

import "./app/utils/i18n";
import { ThemeProvider } from "./app/utils/ThemeProvider";
import { DataProvider } from "./app/utils/DataProvider";
import NavigationOverlay from "./app/components/NavigationOverlay";

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <StatusBar style="light" />
        <NavigationOverlay />
      </DataProvider>
    </ThemeProvider>
  );
}
