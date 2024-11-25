import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  import('../mocks');
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
