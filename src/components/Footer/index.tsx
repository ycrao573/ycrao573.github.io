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

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="contact-info">
        <span>
          <PhoneOutlined />
          +65 83487085
        </span>
        <span>
          <MailOutlined />
          <a href="mailto:raoyuchenom@gmail.com">raoyuchenom@gmail.com</a>
        </span>
      </div>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <WechatOutlined />
        </a>
        {/* Add more social media icons and links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
