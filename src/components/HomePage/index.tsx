import React from 'react';
import { Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import WorldMap from '../WorldMap';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <WorldMap />
      <Footer />
    </Layout>
  );
};

export default HomePage;
