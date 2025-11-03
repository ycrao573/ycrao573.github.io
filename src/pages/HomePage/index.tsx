import React, { useState } from 'react';
import { Divider, FloatButton, Layout } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WorldMap from '@/components/WorldMap';
import { ConfigProvider, theme } from 'antd';
import Experience from '@/components/Experience';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Projects from '@/components/Projects';
import { ThemeContext } from '@/context';

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ConfigProvider
      theme={{
        ...{ ...(darkMode ? { algorithm: theme.darkAlgorithm } : {}) },
        token: {
          colorPrimary: darkMode ? '#3A9D7A' : '#5BB98C',
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
