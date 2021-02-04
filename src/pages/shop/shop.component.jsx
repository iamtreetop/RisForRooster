import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CategoriesOverview from '../../components/categories-overview/categories-overview.component'
import CategoryPage from '../category/category.component';

import { fetchCategoriesStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCategoryFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CategoriesOverviewWithSpinner = WithSpinner(CategoriesOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCategoriesStartAsync } = this.props;
    fetchCategoriesStartAsync();
  }

  render() {
    const { match, isCategoryFetching } = this.props;
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={props => (
            <CategoriesOverviewWithSpinner isLoading={isCategoryFetching} {...props} />
          )}
        />
        <Route 
          path={`${match.path}/:categoryId`} 
          render={props => (
            <CategoryPageWithSpinner isLoading={isCategoryFetching} {...props} />
          )}
        />
      </div>
    )
  }
};

const mapSTP = createStructuredSelector({
  isCategoryFetching: selectIsCategoryFetching
})

const mapDTP = dispatch => {
  return ({
    fetchCategoriesStartAsync: () => dispatch(fetchCategoriesStartAsync())
  })
};

export default connect(
  mapSTP,
  mapDTP
)(ShopPage);