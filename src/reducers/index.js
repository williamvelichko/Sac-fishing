import { ADD_TO_BASKET } from "../actions/index";

const initialState = {
  items: [
    {
      id: 1,
      name: "diawa tatutla ",
      description: "The smoothest and fastest",
      price: "150.99",
      image:
        "https://images.unsplash.com/photo-1625982503493-0b08b284b85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZpc2hpbmclMjByZWVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "diawa tatutla ",
      description: "The smoothest and fastest",
      price: "150.99",
      image:
        "https://images.unsplash.com/photo-1625982503493-0b08b284b85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZpc2hpbmclMjByZWVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "diawa tatutla ",
      description: "The smoothest and fastest",
      price: "150.99",
      image:
        "https://images.unsplash.com/photo-1625982503493-0b08b284b85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZpc2hpbmclMjByZWVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "diawa tatutla ",
      description: "The smoothest and fastest",
      price: "150.99",
      image:
        "https://images.unsplash.com/photo-1625982503493-0b08b284b85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZpc2hpbmclMjByZWVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
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

    default:
      return state;
  }
};

export default reducer;
