import type { AppProps } from 'next/app';
import ResetCss from '../src/Global/styles/ResetCss';
import GlobalStyles from '../src/Global/styles/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
