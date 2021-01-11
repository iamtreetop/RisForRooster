import { addItemToCart } from './cart.utils'

export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const ADD_ITEM = 'ADD_ITEM'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
} 

export default cartReducer;