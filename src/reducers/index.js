import { ADD_TO_BASKET, REMOVE_ITEM, GET_ITEMS } from "../actions/index";

const initialState = {
  items: [
    {
      name: "Diawa Tatula",
      description: "The fastest, the smoothest, the best",
      price: 150.0,
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcvRn8k4A4N348otUmflT0AUP3XBBkSo55A&usqp=CAU",
    },
    {
      name: "Shimano curado",
      description: "The fastest, the smoothest, the best",
      price: 100.0,
      rating: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcvRn8k4A4N348otUmflT0AUP3XBBkSo55A&usqp=CAU",
    },
    {
      name: "shimano slx 200",
      description: "The fastest, the smoothest, the best",
      price: 200.0,
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhEQmW-hGtpSLxRqFZfyZ99xXaQswV-odzQ&usqp=CAU",
    },
    {
      name: "Diawa Tatula",
      description: "The fastest, the smoothest, the best",
      price: 150.0,
      rating: 5,
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
