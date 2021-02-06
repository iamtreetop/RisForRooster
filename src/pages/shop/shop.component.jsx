import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoriesOverviewContainer from '../../components/categories-overview/categories-overview.container'
import CategoryPageContainer from '../category/category.container';

import { fetchCategoriesStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCategoriesStart } = this.props;
    fetchCategoriesStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={CategoriesOverviewContainer}
        />
        <Route 
          path={`${match.path}/:categoryId`} 
          component={CategoryPageContainer}
        />
      </div>
    )
  }
};

const mapDTP = dispatch => {
  return ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
  })
};

export default connect(
  null,
  mapDTP
)(ShopPage);