import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Озеро Михайлына - комфортный отдых и рыбалка" />
        <meta name="keywords" content="рыбалка, отдых, озеро, карп, щука, сом, природа, кафе, домики, беседки" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a5276" />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 