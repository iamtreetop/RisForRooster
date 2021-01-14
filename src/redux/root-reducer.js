import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../redux/user/user.reducer";
import cartReducer from "../redux/cart/cart.reducer";
import modalReducer from "../redux/modal/modal.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  modal: modalReducer
});

export default persistReducer(persistConfig, rootReducer);