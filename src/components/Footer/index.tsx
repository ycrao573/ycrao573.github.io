import React from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  WechatOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './styles.scss';
import { theme } from 'antd';

const Footer: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const iconStyle = { color: token.colorPrimary };
  const textStyle = { color: token.colorText };
  return (
    <footer className="footer" id="footer">
      <div className="contact-info">
        <span style={textStyle}>
          <PhoneOutlined style={iconStyle} />
          +65 83487085
        </span>
        <span>
          <MailOutlined style={iconStyle} />
          <a style={textStyle} href="mailto:raoyuchenom@gmail.com">
            raoyuchenom@gmail.com
          </a>
        </span>
      </div>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <GithubOutlined style={iconStyle} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined style={iconStyle} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined style={iconStyle} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <WechatOutlined style={iconStyle} />
        </a>
        {/* Add more social media icons and links as needed */}
      </div>
      <div className="copyright">
        <span style={textStyle}>© RYC, 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
