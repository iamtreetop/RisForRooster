import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoriesOverview from '../../components/categories-overview/categories-overview.component'
import CategoryPage from '../category/category.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CategoriesOverviewWithSpinner = WithSpinner(CategoriesOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {
  
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('categories');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      })
    }) 
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={props => (
            <CategoriesOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route 
          path={`${match.path}/:categoryId`} 
          render={props => (
            <CategoryPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
};

const mapDTP = dispatch => {
  return ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
  })
};

export default connect(
  null,
  mapDTP
)(ShopPage);