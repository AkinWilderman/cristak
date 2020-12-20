import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import Promotions from '../components/home_components/promotions/promotions';
import Top from '../components/home_components/top_products/top_products';
import Recommended from '../components/home_components/recommended_products/recommended';
import Featured from '../components/home_components/featured_products/featured';
import Footer from '../components/footer/footer';

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
          <Recommended />
          <Featured />
        </Layout>
        <Footer />
      </main>
    </div>
  );
}
