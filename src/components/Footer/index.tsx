import React from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  WechatOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Divider, theme, notification } from 'antd';
import './styles.scss';
import { Typography } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';

const { Paragraph } = Typography;

const Footer: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Well, for WeChat wise...`,
      description:
        'Please reach out to me on Instagram or LinkedIn first! Thank you :)',
      placement,
      icon: <WechatOutlined />,
    });
  };
  const { useToken } = theme;
  const { token } = useToken();
  const iconStyle = { color: token.colorPrimary };
  const textStyle = { color: token.colorText };
  return (
    <footer className="footer" id="footer">
      <div className="upper-section">
        <div className="contact-info">
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
          <a
            href="https://github.com/ycrao573"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined style={iconStyle} />
          </a>
          <a
            href="https://www.instagram.com/ycrao573/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined style={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/yuchen-rao-a249b6180/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined style={iconStyle} />
          </a>
          {contextHolder}
          <WechatOutlined
            style={iconStyle}
            onClick={() => {
              openNotification('topRight');
            }}
          />
        </div>
      </div>
      <div className="copyright">
        <Paragraph>© RYC, 2025</Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
