import { combineReducers } from 'redux';

import userReducer from "../redux/user/user.reducer";
import cartReducer from "../redux/cart/cart.reducer";
import modalReducer from "../redux/modal/modal.reducer";

export default combineReducers ({
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer
});