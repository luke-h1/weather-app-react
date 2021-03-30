import { Reset } from '../src/styles/Reset';
import '../src/styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Reset}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
