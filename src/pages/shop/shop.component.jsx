import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../../components/categories-overview/categories-overview.component'
import CategoryPage from '../category/category.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

class ShopPage extends React.Component {
  
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('categories');

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
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

export default ShopPage;