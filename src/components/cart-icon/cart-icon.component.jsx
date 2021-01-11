import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/milkshake.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapSTP = (state) => {
  return ({
    itemCount: selectCartItemsCount(state)
  });
};

const mapDTP = dispatch => {
  return ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
};

export default connect(
  mapSTP, 
  mapDTP
)(CartIcon);