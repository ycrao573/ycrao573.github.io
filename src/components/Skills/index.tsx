import React, { useContext, useEffect, useState } from 'react';
const { Title, Paragraph } = Typography;
// Import the Devicon CSS file
import 'devicon/devicon.min.css';
import { Carousel, Tooltip, Typography, theme } from 'antd';
import './styles.scss';
import { skillsData } from '../../assets/skills_data';

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <Title level={3} className="header">
        My Skills
      </Title>
      <Carousel
        className="skills-carousel"
        dots={false}
        infinite
        speed={1500}
        autoplay
        autoplaySpeed={2000} // Adjust the auto-scroll speed in milliseconds
        slidesToShow={8} // Adjust the number of items visible on screen
        pauseOnHover // Pause autoplay on hover
      >
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <Tooltip placement="top" title={skill.proficiency}>
              <a
                href={skill.jumpUrl}
                style={{ cursor: skill.jumpUrl ? 'pointer' : 'default' }}
              >
                <i
                  className={`devicon-${skill.icon}-plain colored`}
                  style={{
                    fontSize: '250%',
                  }}
                />
              </a>
            </Tooltip>
            <Title className="skill-name" level={5}>
              {skill.title}
            </Title>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Skills;
