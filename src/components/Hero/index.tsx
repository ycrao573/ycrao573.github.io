import React, { useContext } from 'react';
import { Typography, Button, theme } from 'antd';
import { ThemeContext } from '../HomePage';
import './styles.scss'; // Add a corresponding SCSS file

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const value = useContext(ThemeContext);

  return (
    <div className="hero">
      <div
        className="hero-content"
        style={{
          background:
            value === 'dark' ? token.colorBgMask : 'rgba(255, 255, 255, 0.75)',
        }}
      >
        <Title level={1}>RAO YUCHEN</Title>
        <Paragraph>Bridging Creativity and Technology!</Paragraph>
        <Button
          type="primary"
          onClick={() => document.getElementById('footer')?.scrollIntoView()}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Hero;
