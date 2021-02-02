import SHOP_DATA from "./shop.data";

export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

const INITIAL_STATE = {
  categories: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
