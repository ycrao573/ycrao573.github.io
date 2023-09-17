import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <header>
      {isMobile && (
        <div className="mobile-header">
          <Button
            type="primary"
            onClick={showDrawer}
            className="custom-button"
            icon={<FontAwesomeIcon icon={faBars} />}
          />
        </div>
      )}
      <div className="logo">🍊</div>
      {isMobile ? (
        <Drawer
          placement="left"
          closable={true}
          onClose={closeDrawer}
          open={drawerVisible}
          width="60%"
          drawerStyle={{ background: '#101010' }} // Set the background color of the drawer
          maskStyle={{ background: 'rgba(0, 0, 0, 0.7)' }}
          closeIcon={
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white' }} />
          }
        >
          <Menu mode="vertical" theme="dark">
            <Menu.Item key="about" onClick={closeDrawer}>
              About Me
            </Menu.Item>
            <Menu.Item key="skills" onClick={closeDrawer}>
              Skills
            </Menu.Item>
            <Menu.Item key="projects" onClick={closeDrawer}>
              Projects
            </Menu.Item>
            <Menu.Item key="experience" onClick={closeDrawer}>
              Experience
            </Menu.Item>
          </Menu>
        </Drawer>
      ) : (
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="about">About Me</Menu.Item>
          <Menu.Item key="skills">Skills</Menu.Item>
          <Menu.Item key="projects">Projects</Menu.Item>
          <Menu.Item key="experience">Experience</Menu.Item>
        </Menu>
      )}
    </header>
  );
};

export default Header;
