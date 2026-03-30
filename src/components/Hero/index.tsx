import React, { useContext } from 'react';
import { ThemeContext } from '@/context';
import { TypeAnimation } from 'react-type-animation';
import { useI18n } from '@/locale';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  const value = useContext(ThemeContext);
  const { t } = useI18n();

  return (
    <div
      className="relative flex min-h-[100svh] max-w-[100vw] flex-col items-center justify-center gap-3 px-[clamp(16px,4vw,32px)] pt-[clamp(88px,10vw,120px)] pb-[clamp(56px,8vw,96px)] text-center"
      id="hero"
      style={{
        backgroundBlendMode: 'multiply',
        backgroundColor: value === 'dark' ? '#00000008' : '#FFFFFF04',
      }}
    >
      <motion.h1
        className="text-4xl font-bold sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <TypeAnimation
          sequence={['Rao Yuchen', 2000, '饶宇晨', 1500, 'Ryan', 1500, '饒宇晨', 1500]}
          speed={20}
          repeat={Infinity}
        />
      </motion.h1>
      <motion.p
        className="mt-4 text-muted-foreground"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('hero.subtitle')}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button
          className="mt-3"
          onClick={() =>
            document.getElementById('footer')?.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest',
            })
          }
        >
          {t('hero.contact')}
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
