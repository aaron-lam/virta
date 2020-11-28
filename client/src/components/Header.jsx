import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import GoogleAuth from './google-auth';

const Header = () => (
  <Menu attached="top bottom" color="yellow" inverted borderless>
    <Menu.Item header>
      <Link to="/" className="item">
        <img src="/logo192.png" alt="logo" />
      </Link>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Link to="/" className="item">Virta</Link>
      </Menu.Item>
      <Menu.Item>
        <GoogleAuth />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
