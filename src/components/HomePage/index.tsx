import React, { createContext, useEffect, useState } from 'react';
import { Divider, FloatButton, Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import WorldMap from '../WorldMap';
import { ConfigProvider, theme } from 'antd';
import Experience from '../Experience';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Projects from '../Projects';
import Snowflakes from 'magic-snowflakes';

export const ThemeContext = createContext<string | null>(null);

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const snowflakes = new Snowflakes({
      color: darkMode ? '#5ECDEF' : 'white',
      speed: 0.8,
      count: 40,
    });
    snowflakes.start();

    return () => snowflakes.destroy();
  }, [darkMode]);

  return (
    <ConfigProvider
      theme={{
        ...{ ...(darkMode ? { algorithm: theme.darkAlgorithm } : {}) },
        token: {
          colorPrimary: darkMode ? '#4572AB' : '#D49888',
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
          <Projects />
          <Divider />
          <WorldMap />
          <Divider />
          <Footer />
          <FloatButton
            shape="circle"
            type="primary"
            style={{ right: 30 }}
            onClick={() =>
              document
                .getElementById('hero')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            icon={<VerticalAlignTopOutlined />}
          />
        </Layout>
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};

export default HomePage;
