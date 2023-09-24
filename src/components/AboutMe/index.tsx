import {
  Typography,
  Row,
  Col,
  Card,
  theme,
  Button,
  Divider,
  Space,
} from 'antd';
import './styles.scss';
import { DownloadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import DownloadPopup from '../DownloadPopup';
import aboutMeInfo from '../../assets/about_me.json';
import { Spotify } from 'react-spotify-embed';
const { Meta } = Card;
const { Title, Paragraph } = Typography;

export default function AboutMe() {
  const { name, position, introduction } = aboutMeInfo;
  const { title, message } = introduction;
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const handleDownloadClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <div className="aboutme-container">
      <Title level={3} className="header">
        About Me
      </Title>
      <div className="content">
        <Row gutter={16} style={{ maxWidth: 980 }}>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}>
            <Card
              hoverable
              style={{ height: 'auto' }}
              cover={
                <img
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9woeR1fbhgCyufKMDTET5-CXyiaAFBFk4YJ7hZDpR2eknqaamXFY0bzeGt2Rt1MSwMqk&usqp=CAU"
                />
              }
            >
              <Meta title={name} description={position} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Card
              type="inner"
              hoverable
              style={{ height: '100%', fontSize: 15, lineHeight: 1.7 }}
              title={
                <Title level={4} style={{ margin: 0 }}>
                  {title}
                </Title>
              }
            >
              <Space direction="vertical">
                {message}
                <Button
                  type="primary"
                  onClick={handleDownloadClick}
                  icon={<DownloadOutlined />}
                  style={{ float: 'right' }}
                >
                  Download Resume
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
      <DownloadPopup visible={popupVisible} onClose={handlePopupClose} />
    </div>
  );
}
