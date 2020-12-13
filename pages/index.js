import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import Promotions from '../components/home_components/promotions/promotions';
import Top from '../components/home_components/top_products/top_products';

export default function Home() {
  // const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Cristak bazaar</title>
      </Head>
      <main>
        <Layout>
          <Promotions />
          <Top />
        </Layout>
      </main>
    </div>
  );
}
