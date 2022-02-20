import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/flat/Layout";
import MenuContext from "../src/context/MenuContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <MenuContext.Provider
      value={{ open: menuVisible, setOpen: setMenuVisible }}
    >
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </MenuContext.Provider>
  );
}

export default MyApp;
