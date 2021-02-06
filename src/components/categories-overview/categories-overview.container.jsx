import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCategoryFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CategoriesOverview from "./categories-overview.component";

const mapSTP = createStructuredSelector({
  isLoading: selectIsCategoryFetching,
});

const CategoriesOverviewContainer = compose(
  connect(mapSTP),
  WithSpinner
)(CategoriesOverview);

export default CategoriesOverviewContainer;