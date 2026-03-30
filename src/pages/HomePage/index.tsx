import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WorldMap from '@/components/WorldMap';
import Experience from '@/components/Experience';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { ThemeContext } from '@/context';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={darkMode ? 'dark' : 'light'}>
      <div className={darkMode ? 'dark' : ''}>
        <main className="min-h-screen bg-background text-foreground">
          <Header onChange={() => setDarkMode(!darkMode)} />
          <Hero />
          <Separator />
          <AboutMe />
          <Separator />
          <Skills />
          <Separator />
          <Experience />
          <Separator />
          <Projects />
          <Separator />
          <WorldMap />
          <Separator />
          <Footer />
          <Button
            size="icon"
            className="fixed right-8 bottom-8 z-50 rounded-full"
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ArrowUp />
          </Button>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
