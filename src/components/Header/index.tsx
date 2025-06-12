import { useState } from 'react';
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

  const closeDrawer = (id?: string) => {
    return () => {
      setDrawerVisible(false);
      id && jumpToSection(id);
    };
  };

  const jumpToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
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
          onClose={closeDrawer('')}
          open={drawerVisible}
          width="55%"
          closeIcon={<FontAwesomeIcon icon={faArrowLeft} />}
        >
          <Menu mode="vertical">
            <Menu.Item key="about" onClick={closeDrawer('aboutme')}>
              About Me
            </Menu.Item>
            <Menu.Item key="skills" onClick={closeDrawer('skills')}>
              Skills
            </Menu.Item>
            <Menu.Item key="experience" onClick={closeDrawer('experience')}>
              Experience
            </Menu.Item>
            <Menu.Item key="projects" onClick={closeDrawer('projects')}>
              Projects
            </Menu.Item>
          </Menu>
        </Drawer>
      ) : (
        <Menu mode="horizontal" className="horizontal-menu">
          <Menu.Item key="about" onClick={() => jumpToSection('aboutme')}>
            About Me
          </Menu.Item>
          <Menu.Item key="skills" onClick={() => jumpToSection('skills')}>
            Skills
          </Menu.Item>
          <Menu.Item
            key="experience"
            onClick={() => jumpToSection('experience')}
          >
            Experience
          </Menu.Item>
          <Menu.Item key="projects" onClick={() => jumpToSection('projects')}>
            Projects
          </Menu.Item>
        </Menu>
      )}
    </header>
  );
};

export default Header;
