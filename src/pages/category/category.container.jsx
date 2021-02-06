import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCategoryLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CategoryPage from "./category.component";

const mapSTP = createStructuredSelector({
  isLoading: (state) => !selectIsCategoryLoaded(state),
});

const CategoryPageContainer = compose(
  connect(mapSTP),
  WithSpinner
)(CategoryPage);

export default CategoryPageContainer;