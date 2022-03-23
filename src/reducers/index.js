import { ADD_TO_BASKET, REMOVE_ITEM, GET_ITEMS } from "../actions/index";

const initialState = {
  items: [],
  basket: [],
  EmptyBasket: true,
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
        EmptyBasket: false,
      };

    case REMOVE_ITEM:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove!");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
