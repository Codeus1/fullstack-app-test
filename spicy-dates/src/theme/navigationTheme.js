import { DarkTheme } from "@react-navigation/native";
import { colors } from "./colors";

export const neonNavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.neon.pink,
    background: colors.base.900,
    card: colors.base.800,
    text: colors.text.primary,
    border: colors.base.700,
    notification: colors.neon.blue
  }
};
