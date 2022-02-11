// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#137CDE",
    200: "#12233b40",
    300: "#12233b80",
  },
  text: {
    100: "#072932",
    200: "#212A2F",
  },
  border: {
    100: "#C4C4C4",
  },
};

const spaces = {
  "spacer-03": "24px",
  "spacer-04": "36px",
  "spacer-05": "48px",
};

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ colors: colors, space: spaces });

export default theme;
