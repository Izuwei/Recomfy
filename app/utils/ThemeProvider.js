import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import lightTheme from "../constants/theme/light";
import darkTheme from "../constants/theme/dark";
import yellowTheme from "../constants/theme/yellow";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(async () => {
    const storedTheme = await AsyncStorage.getItem("theme");

    switch (storedTheme) {
      case "light":
        setTheme({ name: storedTheme, ...lightTheme });
        break;
      case "dark":
        setTheme({ name: storedTheme, ...darkTheme });
        break;
      case "yellow":
        setTheme({ name: storedTheme, ...yellowTheme });
        break;
      default:
        setTheme({ name: "light", ...lightTheme });
    }
  });

  const changeTheme = async (newTheme) => {
    try {
      await AsyncStorage.setItem("theme", newTheme);
    } catch (e) {
      console.log("Unable to store theme!");
    }

    switch (newTheme) {
      case "light":
        setTheme({ name: newTheme, ...lightTheme });
        break;
      case "dark":
        setTheme({ name: newTheme, ...darkTheme });
        break;
      case "yellow":
        setTheme({ name: newTheme, ...yellowTheme });
        break;
      default:
        setTheme({ name: "light", ...lightTheme });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
