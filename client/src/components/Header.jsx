import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => (
  <Menu secondary>
    <Menu.Item>
      <Link to="/" className="item">
        <img src="/logo192.png" alt="logo" />
      </Link>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Link to="/" className="item">Twitch Clone</Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
