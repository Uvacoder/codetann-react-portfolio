import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("#2D3748", "#EDEDEE")(props),
      bg: mode("#FFFFFF", "#0D131A")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  colors: {
    brand: {
      100: "#c1c2c6", // links
      200: "#ff7e67", // orange
      300: "#2D3748", // dark bg color
      400: "#1E262F", // lighter bg color
    },
  },
});
export default theme;
