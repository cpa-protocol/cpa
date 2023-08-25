import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
        />
      </Head>
      <body className="font-ubuntu">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
