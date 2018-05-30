import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import '../styles/VerticalMenu.css';

const VerticalMenu = ({ albums, albumsPathname }) => (
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Albums
    </div>
    {
      albums.map((album) => {
        const to = `${albumsPathname}/${album.id}`;
        const active = window.location.pathname === to;
        return (
        <NavLink
          to={to}
          className='item'
          activeClassName='active'
          key={album.id}
        >
          {album.name}
        </NavLink> );
      })
    }
  </div>
);

export default VerticalMenu;