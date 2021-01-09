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
        {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4">
          <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
        </svg> */}
      </Link>
      <Link className='option' to='/about-us'>
        OUR STORY
      </Link>
      {/* <Cart> */}
    </div>
  </div>
);

export default Header;