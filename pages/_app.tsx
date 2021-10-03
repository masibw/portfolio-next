import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }): JSX.Element => (
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  <Component {...pageProps} />
);

export default App;
