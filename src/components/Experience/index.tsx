import { Typography } from 'antd';
import './styles.scss';
const { Title } = Typography;
import { Timeline } from 'antd';
import { timelineItems } from '../../assets/experience';

export default function Experience() {
  return (
    <div className="experience-container">
      <Title level={3} className="header">
        My Experience
      </Title>
      <Timeline
        mode="alternate"
        items={timelineItems}
      />
    </div>
  );
}
