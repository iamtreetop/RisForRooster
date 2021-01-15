import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPreview from "../category-preview/category-preview.component";
import { selectCategoriesForPreview } from '../../redux/shop/shop.selectors';

import './categories-overview.styles.scss';

const CategoriesOverview = ({ categories }) => {
  return (
    <div className='categories-overview'>
      {categories.map(({ id, ...otherCategoryProps }) => (
        <CategoryPreview key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapSTP = createStructuredSelector({
  categories: selectCategoriesForPreview
})

export default connect(mapSTP)(CategoriesOverview);