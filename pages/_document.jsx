import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Alkalami&display=swap"
        rel="stylesheet"
      />
      <body className="font-montserrat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}