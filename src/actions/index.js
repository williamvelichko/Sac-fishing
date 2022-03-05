import axios from "axios";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const GET_ITEMS = "GET_ITEMS";

export const addToBasket = (item) => {
  return { type: ADD_TO_BASKET, payload: item };
};

export const removeItem = (item) => {
  return { type: REMOVE_ITEM, payload: item };
};

export const getFishingItems = () => (dispatch) => {
  axios
    .get("https://fishing-store-database.herokuapp.com/api/fishingItems")
    .then((resp) => {
      dispatch({ type: GET_ITEMS, payload: resp.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
