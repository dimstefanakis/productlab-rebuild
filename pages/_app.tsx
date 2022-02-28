import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import theme from "../src/theme";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/flat/Layout";
import { store } from "../src/store";

interface AppWrapperProps {
  children: JSX.Element;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

function AppWrapper({ children }: AppWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{children}</>;
}

export default MyApp;
