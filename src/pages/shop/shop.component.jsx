import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CategoriesOverviewContainer from '../../components/categories-overview/categories-overview.container'
import CategoryPage from '../category/category.component';

import { fetchCategoriesStartAsync } from '../../redux/shop/shop.actions';
import { 
  selectIsCategoryLoaded 
} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCategoriesStartAsync } = this.props;
    fetchCategoriesStartAsync();
  }

  render() {
    const { match, isCategoryLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={CategoriesOverviewContainer}
        />
        <Route 
          path={`${match.path}/:categoryId`} 
          render={props => (
            <CategoryPageWithSpinner isLoading={!isCategoryLoaded} {...props} />
          )}
        />
      </div>
    )
  }
};

const mapSTP = createStructuredSelector({
  isCategoryLoaded: selectIsCategoryLoaded
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