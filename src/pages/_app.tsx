import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>ましのportfolio</title>
      <link rel="icon" href="/icon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default App;
