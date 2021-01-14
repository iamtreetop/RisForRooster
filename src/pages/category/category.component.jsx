import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from '../../components/category-item/category-item.component';

import { selectCategory } from '../../redux/shop/shop.selectors';

import './category.styles.scss';

const CategoryPage = ({ category }) => {
  console.log(category);
  // const { title, items } = category;
  return (
    <div className='category-page'>
      CATEGORY PAGE
      {/* <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div> */}
    </div>
  );
};

const mapSTP = (state, ownProps) => {
  return ({
    category: selectCategory(ownProps.match.params.categoryId)(state)
  })
}

export default connect(mapSTP)(CategoryPage);