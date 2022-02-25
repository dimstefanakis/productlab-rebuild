import { Html, Head, Main, NextScript } from "next/document";
import { repoName } from "../prismicConfiguration";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          async
          defer
          src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
