import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/flat/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
