import React from 'react';
import { Badge, Typography } from 'antd';
import { ProjectCard } from './project-card';
import './styles.scss';
const { Title } = Typography;

const Projects: React.FC = () => {
  return (
    <div className="projects" id="projects">
      <Title level={3} className="header">
        Projects
      </Title>
      <div className="projects-list">
        <ProjectCard
          imgUrl={
            'https://img.alicdn.com/tfs/TB1NbbEPqL7gK0jSZFBXXXZZpXa-564-250.png_.webp'
          }
          extraStyles={{ padding: '15%' }}
          prodLink="https://redmart.lazada.sg/"
          title={'RedMart by Lazada'}
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
          title={'Final Year Project: Travelee'}
          description={
            "This final year project involves developing a mobile app using Flutter and Firebase, employing advanced technologies like Google's geolocation, image recognition, and Wikitude AR SDK. It aims to improve the experience of travelers when navigating local tourist attractions, providing them with seamless and intuitive guidance"
          }
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
          title={'Year 3 DIP: GoGoGoals'}
          description={
            'A group project for building an mobile app for tracking goals and manage personal productivity. It allow users to easily manage and view goals by category, with intelligent recommendation of to-dos.'
          }
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
