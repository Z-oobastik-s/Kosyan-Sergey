import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Check if the current page is the admin page
  const isAdminPage = Component.displayName === 'AdminPanel';
  
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
      
      {isAdminPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp; 