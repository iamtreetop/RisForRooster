import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from '../../components/category-item/category-item.component';

import { selectCategory } from '../../redux/shop/shop.selectors';

import {
  CategoryPageContainer,
  CategoryTitle,
  CategoryItemsContainer
} from './category.styles';

const CategoryPage = ({ category }) => {
  const { title, items } = category;
  return (
    <CategoryPageContainer>
      <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
      <CategoryItemsContainer>
        {items.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </CategoryItemsContainer>
    </CategoryPageContainer>
  );
};

const mapSTP = (state, ownProps) => {
  return ({
    category: selectCategory(ownProps.match.params.categoryId)(state)
  })
};

export default connect(mapSTP)(CategoryPage);