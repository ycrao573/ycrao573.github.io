import React, { useState } from 'react';
import { Menu, Drawer, Button, Switch } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

interface Props {
  onChange?: () => void;
}

const Header = (props: Props) => {
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
      <div className="logo">
        🍊
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          className="switch"
          defaultChecked
          onChange={props.onChange}
        />
      </div>
      {isMobile ? (
        <Drawer
          placement="left"
          closable={true}
          onClose={closeDrawer}
          open={drawerVisible}
          width="60%"
          closeIcon={<FontAwesomeIcon icon={faArrowLeft} />}
        >
          <Menu mode="vertical">
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
        <Menu mode="horizontal">
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
