import React from 'react';
import { Typography, Button } from 'antd';
import './styles.scss'; // Add a corresponding SCSS file

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <Title level={1}>RAO YUCHEN</Title>
        <Paragraph>Self Introduction</Paragraph>
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
