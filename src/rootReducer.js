import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes'

const INITIAL_STATE = {
    // allItems: [],
    itemsInCart: [],
  };

  function rootReducer(state = INITIAL_STATE, action) {
    if (action.type === ADD_TO_CART) {
      const currItemsInCart = [...state.itemsInCart, action.payload.item];
      return { todoList: currItemsInCart };
    }

    if (action.type === REMOVE_FROM_CART) {
      const currItemsInCart = state.todoList.filter(t => t.id !== action.payload.id)
      return { todoList: currItemsInCart };
    }

    return state;
  }

  export default rootReducer;