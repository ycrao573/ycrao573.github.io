import React from 'react';
import { Badge, Typography } from 'antd';
import { ProjectCard } from './project-card';
import './styles.scss';
const { Title } = Typography;
import { useI18n } from '@/locale';

const Projects: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="projects" id="projects">
      <Title level={3} className="header">
        {t('projects.title')}
      </Title>
      <div className="projects-list">
        <ProjectCard
          imgUrl={
            'https://img.alicdn.com/tfs/TB1NbbEPqL7gK0jSZFBXXXZZpXa-564-250.png_.webp'
          }
          extraStyles={{ padding: '15%' }}
          prodLink="https://redmart.lazada.sg/"
          title={t('projects.redmart.title')}
          badges={
            <>
              <Badge color="#ee4054" count="React"></Badge>
              <Badge color="#ee4054" count="TypeScript"></Badge>
              <Badge color="#ee4054" count="CSS/SCSS"></Badge>
              <Badge color="#ee4054" count="Rax"></Badge>
            </>
          }
          description={''}
        />
        <ProjectCard
          imgUrl={
            'https://github.com/ycrao573/ar-tour-guide-fyp/raw/master/assets/images/banner.png'
          }
          githubLink={'https://github.com/ycrao573/ar-tour-guide-fyp'}
          title={t('projects.fyp.title')}
          description={t('projects.fyp.desc')}
          badges={
            <>
              <Badge color="aqua" count="Flutter"></Badge>
              <Badge color="aqua" count="Android"></Badge>
              <Badge color="aqua" count="Firebase"></Badge>
              <Badge color="aqua" count="JavaScript"></Badge>
            </>
          }
        />
        <ProjectCard
          imgUrl={
            'https://github.com/NTU-AY2020-DIP-Group-8/gogogoals/raw/master/resources/Poster.jpeg'
          }
          githubLink={'https://github.com/NTU-AY2020-DIP-Group-8/gogogoals'}
          title={t('projects.dip.title')}
          description={t('projects.dip.desc')}
          badges={
            <>
              <Badge color="orange" count="Flutter"></Badge>
              <Badge color="orange" count="Node.js"></Badge>
              <Badge color="orange" count="Firebase"></Badge>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
