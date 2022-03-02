export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addToBasket = (item) => {
  return { type: ADD_TO_BASKET, payload: item };
};

export const removeItem = (item) => {
  return { type: REMOVE_ITEM, payload: item };
};
