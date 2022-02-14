// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

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
  button: {
    100: "#12233B",
    200: "#060e19",
  },
};

const spaces = {
  "spacer-03": "24px",
  "spacer-04": "36px",
  "spacer-05": "48px",
  "spacer-06": "72px",
};

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const styles = {
  global: {
    "html, body": {
      borderColor: 'border.100'
    },
    a: {
      color: "teal.500",
    },
  },
};

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  colors: colors,
  space: spaces,
  breakpoints: breakpoints,
  styles: styles,
});

export default theme;
