import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Sidebar, Sidenav, Content, Nav, DOMHelper } from 'rsuite';
import { Outlet } from 'react-router-dom';
import NavToggle from './NavToggle';
import Header from '../Header';
import NavLink from '../NavLink';
import Brand from '../Brand';
import { CustomProvider } from 'rsuite';
import enGB from 'rsuite/locales/en_GB';
import {observer} from "mobx-react-lite";

const { getHeight, on } = DOMHelper;

const NavItem = props => {
  const { title, eventKey, ...rest } = props;
  return (
    <Nav.Item eventKey={eventKey} as={NavLink} {...rest}>
      {title}
    </Nav.Item>
  );
};

export interface NavItemData {
  eventKey: string;
  title: string;
  icon?: any;
  to?: string;
  target?: string;
  children?: NavItemData[];
}

export interface FrameProps {
  navs: NavItemData[];
  children?: React.ReactNode;
}

const Frame = observer((props: FrameProps) => {
  const { navs } = props;
  const [expand, setExpand] = useState(true);
  const [windowHeight, setWindowHeight] = useState(getHeight(window));
  const [theme, setTheme] = useState<'light' | 'dark' | 'high-contrast'>('light');

  useEffect(() => {
    setWindowHeight(getHeight(window));
    const resizeListenner = on(window, 'resize', () => setWindowHeight(getHeight(window)));

    return () => {
      resizeListenner.off();
    };
  }, []);

  const containerClasses = classNames('page-container', {
    'container-full': !expand
  });

  const navBodyStyle: React.CSSProperties = expand
    ? { height: windowHeight - 150, overflow: 'auto' }
    : {};

  return (
    <CustomProvider locale={enGB} theme={theme}>
      <Container className="frame">
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <Brand />
          </Sidenav.Header>
          <Sidenav expanded={expand} appearance="subtle" defaultOpenKeys={['2', '3']}>
            <Sidenav.Body style={navBodyStyle}>
              <Nav>
                {navs.map(item => {
                  const { children, ...rest } = item;
                  if (children) {
                    return (
                      <Nav.Menu key={item.eventKey} placement="rightStart" trigger="hover" {...rest}>
                        {children.map(child => {
                          return <NavItem key={child.eventKey} {...child} />;
                        })}
                      </Nav.Menu>
                    );
                  }

                  if (rest.target === '_blank') {
                    return (
                      <Nav.Item key={item.eventKey} {...rest}>
                        {item.title}
                      </Nav.Item>
                    );
                  }

                  return <NavItem key={rest.eventKey} {...rest} />;
                })}
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container className={containerClasses}>
          <Header theme={theme} onChangeTheme={setTheme}/>
          <Content>
            <Outlet />
          </Content>
        </Container>
      </Container>
    </CustomProvider>
  );
});

export default Frame;
