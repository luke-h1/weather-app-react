import { Reset } from '../styles/Reset';
function MyApp({ Component, pageProps }) {
  return (
    <>
      {Reset}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
