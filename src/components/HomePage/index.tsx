import React, { createContext, useState } from 'react';
import { Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import WorldMap from '../WorldMap';
import { ConfigProvider, theme } from 'antd';

export const ThemeContext = createContext<string | null>(null);

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ConfigProvider
      theme={{
        ...{ ...(darkMode ? { algorithm: theme.darkAlgorithm } : {}) },
        token: {
          colorPrimary: '#F4801A',
          borderRadius: 6,
        },
      }}
    >
      <ThemeContext.Provider value={darkMode ? 'dark' : 'light'}>
        <Layout>
          <Header onChange={() => setDarkMode(!darkMode)} />
          <Hero />
          <WorldMap />
          <Footer />
        </Layout>
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};

export default HomePage;
