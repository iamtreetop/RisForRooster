import React from 'react';

import CategoryItem from '../category-item/category-item.component';

import './category-preview.styles.scss'

const CategoryPreview = ({ title, items }) => {
  return (
  <div className='category-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CategoryItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
  );
};

export default CategoryPreview;