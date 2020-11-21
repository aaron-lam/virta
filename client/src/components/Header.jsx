import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import GoogleAuth from './GoogleAuth';

const Header = () => (
  <Menu attached="top bottom" inverted borderless>
    <Menu.Item header>
      <Link to="/" className="item">
        <img src="/logo192.png" alt="logo" />
      </Link>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Link to="/" className="item">Twitch Clone</Link>
      </Menu.Item>
      <Menu.Item>
        <GoogleAuth />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
