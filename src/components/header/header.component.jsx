import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png'

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} className='logo' alt="" />
    </Link>
    {/* <Search> */}
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/about-us'>
        OUR STORY
      </Link>
      {/* <Cart> */}
    </div>
  </div>
);

export default Header;