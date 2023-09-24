import React from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  WechatOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Divider, theme } from 'antd';
import './styles.scss';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const Footer: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const iconStyle = { color: token.colorPrimary };
  const textStyle = { color: token.colorText };
  return (
    <footer className="footer" id="footer">
      <div className="upper-section">
        <div className="contact-info">
          <a className="contact-item" style={textStyle} href="tel:65-83487085">
            <PhoneOutlined style={iconStyle} />
            <Paragraph className="contact-text" style={{ marginTop: 8 }}>
              +65 83487085
            </Paragraph>
          </a>
          <a
            style={textStyle}
            className="contact-item"
            href="mailto:raoyuchenom@gmail.com"
          >
            <MailOutlined style={iconStyle} />
            <Paragraph className="contact-text" style={{ marginTop: 8 }}>
              raoyuchenom@gmail.com
            </Paragraph>
          </a>
        </div>
        <Divider
          className="footer-divider"
          type="vertical"
          style={{ height: '5em' }}
        />
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
        </div>
      </div>
      <div className="copyright">
        <Paragraph>© RYC, 2023</Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
