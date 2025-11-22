import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Anchor used by Next's runtime/style loader to insert CSS */}
        <noscript id='__next_css__DO_NOT_USE__' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
