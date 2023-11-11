import React, { useContext } from 'react';
import { Image, Typography, Button, theme } from 'antd';
import { ThemeContext } from '../HomePage';
import './styles.scss'; // Add a corresponding SCSS file
import { TypeAnimation } from 'react-type-animation';
const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const value = useContext(ThemeContext);

  return (
    <div
      className="hero"
      id="hero"
      style={{
        backgroundBlendMode: 'multiply',
        backgroundColor: value === 'dark' ? '#00000030' : '#FFFFFF09',
      }}
    >
      <div>
        <Image
          width={200}
          style={{ padding: '0 15px' }}
          src={'src/assets/avatar_6.png'}
        ></Image>
        <div
          className="hero-content"
          style={{
            background:
              value === 'dark'
                ? token.colorBgMask
                : 'rgba(255, 255, 255, 0.75)',
          }}
        >
          <Title level={1}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Rao Yuchen',
                2000,
                'Ryan',
                2000,
                '饶宇晨 :)',
                2000,
              ]}
              speed={20}
              repeat={Infinity}
            />
          </Title>
          <Paragraph>Bridging Creativity and Technology!</Paragraph>
          <Button
            type="primary"
            onClick={() =>
              document.getElementById('footer')?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
              })
            }
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
