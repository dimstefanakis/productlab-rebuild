import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { useColorMode } from "@chakra-ui/color-mode";
import { Global, css } from "@emotion/react";
import theme from "../src/theme";
import "focus-visible/dist/focus-visible";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/flat/Layout";
import { store } from "../src/store";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

interface AppWrapperProps {
  children: JSX.Element;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <ChakraProvider theme={theme}>
        <Layout>
          <AppWrapper>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </AppWrapper>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

function AppWrapper({ children }: AppWrapperProps) {
  const [mounted, setMounted] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  // force light mode
  useEffect(() => {
    if (colorMode != "light") {
      toggleColorMode();
    }
  }, [colorMode]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{children}</>;
}

export default MyApp;
