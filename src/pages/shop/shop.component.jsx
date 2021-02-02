import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoriesOverview from '../../components/categories-overview/categories-overview.component'
import CategoryPage from '../category/category.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('categories');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    }) 
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CategoriesOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
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