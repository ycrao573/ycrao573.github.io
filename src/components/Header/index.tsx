import { useState } from 'react';
import { Menu, Drawer, Button, Switch, Select } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { useI18n } from '@/locale';

interface Props {
  onChange?: () => void;
}

const Header = (props: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { t, locale, setLocale } = useI18n();

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
          checkedChildren={t('theme.dark')}
          unCheckedChildren={t('theme.light')}
          className="switch"
          defaultChecked
          onChange={props.onChange}
        />
        <Select
          size="small"
          style={{ width: 100, marginLeft: 8 }}
          value={locale}
          onChange={(val) => setLocale(val as any)}
          options={[
            { value: 'en', label: 'English' },
            { value: 'zh', label: '中文' },
          ]}
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
              {t('nav.about')}
            </Menu.Item>
            <Menu.Item key="skills" onClick={closeDrawer('skills')}>
              {t('nav.skills')}
            </Menu.Item>
            <Menu.Item key="experience" onClick={closeDrawer('experience')}>
              {t('nav.experience')}
            </Menu.Item>
            <Menu.Item key="projects" onClick={closeDrawer('projects')}>
              {t('nav.projects')}
            </Menu.Item>
          </Menu>
        </Drawer>
      ) : (
        <Menu mode="horizontal" className="horizontal-menu">
          <Menu.Item key="about" onClick={() => jumpToSection('aboutme')}>
            {t('nav.about')}
          </Menu.Item>
          <Menu.Item key="skills" onClick={() => jumpToSection('skills')}>
            {t('nav.skills')}
          </Menu.Item>
          <Menu.Item
            key="experience"
            onClick={() => jumpToSection('experience')}
          >
            {t('nav.experience')}
          </Menu.Item>
          <Menu.Item key="projects" onClick={() => jumpToSection('projects')}>
            {t('nav.projects')}
          </Menu.Item>
        </Menu>
      )}
    </header>
  );
};

export default Header;
