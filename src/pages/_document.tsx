import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = { unknown };

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="ましのportfolio" />
          <meta property="og:locale" content="ja_JP" />
          <meta name="description" content="ましのportfolio" />
          <meta property="og:title" content="ましのportfolio" key="og:title" />
          <meta
            property="og:url"
            key="og-url"
            content="https://masi-portfolio-next.vercel.app/"
          />
          <meta property="og:image" content="/icon.svg" key="og:image" />
          <meta property="og:type" content="website" />

          <meta property="og:site_name" content="ましのportfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@masibw" />
          <meta property="og:locale" content="ja_JP" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
