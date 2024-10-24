import { Typography } from 'antd';
import './styles.scss';
import { Timeline } from 'antd';
import { timelineItems } from './experience';
import { useMediaQuery } from 'react-responsive';
const { Title } = Typography;

export default function Experience() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="experience-container" id="experience">
      <Title level={3} className="header">
        My Experience
      </Title>
      <Timeline
        className="timeline-container"
        mode={'left'}
        items={timelineItems}
        style={{ maxWidth: 800 }}
        reverse={true}
      />
    </div>
  );
}
