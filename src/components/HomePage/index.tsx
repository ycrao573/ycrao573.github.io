import React, { createContext, useState } from 'react';
import { Divider, Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import WorldMap from '../WorldMap';
import { ConfigProvider, theme } from 'antd';
import Experience from '../Experience';
import AboutMe from '../AboutMe';
import Skills from '../Skills';

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
          <Divider />
          <AboutMe />
          <Divider />
          <Skills />
          <Divider />
          <Experience />
          <Divider />
          <WorldMap />
          <Divider />
          <Footer />
        </Layout>
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};

export default HomePage;
