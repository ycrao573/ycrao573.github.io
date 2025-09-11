import React, { useContext } from 'react';
import { Typography, Button, theme } from 'antd';
import { ThemeContext } from '../HomePage';
import './styles.scss'; // Add a corresponding SCSS file
import { TypeAnimation } from 'react-type-animation';
import { useI18n } from '@/locale';
const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const value = useContext(ThemeContext);
  const { t } = useI18n();

  return (
    <div
      className={value === 'dark' ? 'hero hero-dark' : 'hero'}
      id="hero"
      style={{
        backgroundBlendMode: 'multiply',
        backgroundColor: value === 'dark' ? '#00000008' : '#FFFFFF04',
      }}
    >
      <div
        className="hero-content"
        style={{
          background:
            value === 'dark' ? token.colorBgMask : 'rgba(255, 255, 255, 0.75)',
        }}
      >
        <Title level={1}>
          <TypeAnimation
            sequence={[
              'Rao Yuchen',
              2000,
              '饶宇晨',
              1500,
              'Ryan',
              1500,
              '饒宇晨',
              1500,
            ]}
            speed={20}
            repeat={Infinity}
          />
        </Title>
        <Paragraph>{t('hero.subtitle')}</Paragraph>
        <Button
          className="gradient-btn"
          type="primary"
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
      </div>
    </div>
  );
};

export default Hero;
