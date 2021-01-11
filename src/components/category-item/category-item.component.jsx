import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions'; 

import './category-item.styles.scss';

const CategoryItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='category-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='category-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted> 
        Add to cart 
      </CustomButton>
    </div>
  )
};

const mapDTP = (dispatch) => {
  return ({
    addItem: item => dispatch(addItem(item))
  });
};

export default connect(
  null,
  mapDTP
)(CategoryItem);