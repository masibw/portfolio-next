import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <Component {...pageProps} />
);

export default App;
