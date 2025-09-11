import { Typography } from 'antd';
import './styles.scss';
import { Timeline } from 'antd';
import { createTimelineItems } from './experience';
const { Title } = Typography;
import { useI18n } from '@/locale';

export default function Experience() {
  const { t } = useI18n();
  return (
    <div className="experience-container" id="experience">
      <Title level={3} className="header">
        {t('experience.title')}
      </Title>
      <Timeline
        className="timeline-container"
        mode={'left'}
        items={createTimelineItems(t)}
        style={{ maxWidth: 800 }}
        reverse={true}
      />
    </div>
  );
}
