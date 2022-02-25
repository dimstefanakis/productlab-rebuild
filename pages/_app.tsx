import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "../src/theme";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/flat/Layout";
import { store } from "../src/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
