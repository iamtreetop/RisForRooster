import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import CategoryPreview from '../../components/category-preview/category-preview.component'

import { selectCategories } from '../../redux/shop/shop.selectors';

const ShopPage = ({ categories }) => {
  return (
    <div className="shop-page">
      {categories.map( ({ id, ...otherCategoryProps }) => {
        return (
          <div>
            <CategoryPreview key={id} {...otherCategoryProps} />
          </div>
        )}
      )}
    </div>
  )
};

const mapSTP = createStructuredSelector({
  categories: selectCategories
})

export default connect(mapSTP)(ShopPage);