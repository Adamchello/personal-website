import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adam Gornas | Frontend Developer</title>
        <meta name='og:title' content='Adam Gornas | Frontend Developer' />
        <meta
          name='og:description'
          content='Adam Gornas - Frontend developer and programming mentor from Poland.'
        />
        <meta
          name='description'
          content='Adam Gornas - Frontend developer and programming mentor from Poland.'
        />
        <meta name='author' content='Adam Gornas' />

        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
