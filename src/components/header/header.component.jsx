import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { openModal } from "../../redux/modal/modal.actions";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Logo from '../../assets/logo.png'

import './header.styles.scss';

const Header = ({ currentUser, hidden, openModal }) => (
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
        <div className='option' onClick={openModal}>
          SIGN IN
        </div>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapSTP = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});


const mapDTP = (dispatch) => {
  return ({
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default connect(
  mapSTP, 
  mapDTP
)(Header);