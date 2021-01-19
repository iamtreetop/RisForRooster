import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions'; 

import {
  CategoryItemContainer,
  CategoryFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './category-item.styles';

const CategoryItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CategoryItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CategoryFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CategoryFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CategoryItemContainer>
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