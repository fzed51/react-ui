export type Color = string;

export interface BasicColorsTheme {
  primary: Color;
  secondary: Color;
  dark: Color;
  light: Color;
  info: Color;
  success: Color;
  warning: Color;
  fail: Color;
}

export interface ColorsTheme {
  primary: Color;
  "primary-l1": Color;
  "primary-l2": Color;
  "primary-d1": Color;
  "primary-d2": Color;
  secondary: Color;
  "secondary-l1": Color;
  "secondary-l2": Color;
  "secondary-d1": Color;
  "secondary-d2": Color;
  dark: Color;
  "dark-l1": Color;
  "dark-l2": Color;
  "dark-l3": Color;
  "dark-l4": Color;
  light: Color;
  "light-d1": Color;
  "light-d2": Color;
  "light-d3": Color;
  "light-d4": Color;
  info: Color;
  success: Color;
  warning: Color;
  fail: Color;
}

export interface Theme {
  colors: ColorsTheme;
}
