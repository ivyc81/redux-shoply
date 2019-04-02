import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes'

const INITIAL_STATE = {
    itemsInCart: []
  };

  function rootReducer(state = INITIAL_STATE, action) {
    if (action.type === ADD_TO_CART) {
      const currItemsInCart = [...state.itemsInCart, action.payload.item];
      return { itemsInCart: currItemsInCart };
    }

    if (action.type === REMOVE_FROM_CART) {
      const currItemsInCart = state.itemsInCart.filter(t => t.id !== action.payload.id)
      return { itemsInCart: currItemsInCart };
    }

    return state;
  }

  export default rootReducer;