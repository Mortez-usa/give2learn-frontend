<NextNProgress /> to your return() in MyApp():

import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />;
    </>
  );
}