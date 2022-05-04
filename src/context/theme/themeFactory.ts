import { BasicColorsTheme, ColorsTheme } from "./types";
import color from "color";

export const themeFactory = (basicColors: BasicColorsTheme): ColorsTheme => {
  return {
    ...basicColors,
    "primary-d1": color(basicColors.primary).darken(0.2).hex(),
    "primary-d2": color(basicColors.primary).darken(0.4).hex(),
    "primary-l1": color(basicColors.primary).lighten(0.2).hex(),
    "primary-l2": color(basicColors.primary).lighten(0.4).hex(),
    "secondary-d1": color(basicColors.secondary).darken(0.2).hex(),
    "secondary-l1": color(basicColors.secondary).darken(0.4).hex(),
    "secondary-d2": color(basicColors.secondary).lighten(0.2).hex(),
    "secondary-l2": color(basicColors.secondary).lighten(0.4).hex(),
    "dark-l1": color(basicColors.dark).lighten(0.2).hex(),
    "dark-l2": color(basicColors.dark).lighten(0.4).hex(),
    "dark-l3": color(basicColors.dark).lighten(0.6).hex(),
    "dark-l4": color(basicColors.dark).lighten(0.8).hex(),
    "light-d1": color(basicColors.light).darken(0.2).hex(),
    "light-d2": color(basicColors.light).darken(0.4).hex(),
    "light-d3": color(basicColors.light).darken(0.6).hex(),
    "light-d4": color(basicColors.light).darken(0.8).hex(),
  };
};

export default themeFactory;
