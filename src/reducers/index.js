import { ADD_TO_BASKET, REMOVE_ITEM, GET_ITEMS } from "../actions/index";

const initialState = {
  items: [
    {
      id: 1,
      name: "Diawa Tatula",
      description:
        "More compact and palmable than ever, the lightweight Daiwa® Tatula CT Baitcast Reel offers superior castability and control for a wide range of bassin' techniques",
      price: 150.0,
      rating: 5,
      inBasket: 0,
      image:
        "https://www.pngfind.com/pngs/m/164-1646851_fishing-reel-png-png-download-fishing-reel-transparent.png",
    },
    {
      id: 2,
      name: "PENN Spinfisher VI Spinning Reel",
      description:
        "One of the most recognized and accomplished saltwater spinning reels in the world, the PENN® Spinfisher® is a real workhorse.",
      price: 100.0,
      rating: 4,
      inBasket: 0,
      image:
        "https://img.favpng.com/10/17/25/fishing-reels-penn-reels-fishing-rods-fishing-tackle-png-favpng-326aqDmwbGDmF6mxTjT8JEVyq.jpg",
    },
    {
      id: 3,
      name: "shimano slx 200",
      description:
        "Quick and stealthy, or tough and strong. Whatever you need your reel to be, the Shimano® Vanford Spinning Reel can handle the challenge.",
      price: 200.0,
      rating: 5,
      inBasket: 0,
      image:
        "https://img.favpng.com/10/0/17/fishing-reels-gold-freilaufrolle-station-rrolle-mitchell-avocet-rtz-spinning-reel-png-favpng-sUTSSE4af8W8SkfMF0BpMy80V.jpg",
    },
    {
      id: 4,
      name: "Okuma Solterra SLX-B ",
      description:
        "The power to prevail, plus a bevy of refined features, make the Okuma Solterra SLX-B Lever Drag Dual-Speed Reel a smart choice for your big-game fishing exploits",
      price: 150.0,
      rating: 5,
      inBasket: 0,
      image:
        "https://www.pngfind.com/pngs/m/605-6057142_saltwater-fishing-reels-saltwater-fishing-rods-penn-international.png",
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
