import {
  INCREASE_COUNTER,
  INCREASE_CART_ITEMS,
  CartActions,
} from './counter.actions';

const INITIAL_STATE = {
  counterValue: 0,
  cartItems: [],
};

export function counterReducer(state = INITIAL_STATE, action : CartActions) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counterValue: action.payload,
      };
    case INCREASE_CART_ITEMS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
}
