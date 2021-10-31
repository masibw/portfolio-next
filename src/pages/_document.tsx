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
