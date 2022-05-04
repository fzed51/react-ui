import React, { createContext, FC, useContext } from "react";
import { defaultTheme } from "./defaultTheme";
import themeFactory from "./themeFactory";
import { BasicColorsTheme, ColorsTheme } from "./types";

const ThemeContext = createContext<ColorsTheme>(themeFactory(defaultTheme));

export interface ThemeProviderProps {
  basicColors: BasicColorsTheme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  basicColors,
}) => {
  return (
    <ThemeContext.Provider value={themeFactory(basicColors)}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ColorsTheme => {
  try {
    return useContext(ThemeContext);
  } catch (err) {
    throw new Error("Impossible d'exploiter le ThemeContext");
  }
};

export default ThemeProvider;
