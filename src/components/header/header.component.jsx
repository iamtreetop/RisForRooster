import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/logo.png'

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className='option'onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      {/* <Cart> */}
    </div>
  </div>
);

const mapSTP = state => {
  return ({
    currentUser: state.user.currentUser
  });
};

export default connect(mapSTP)(Header);