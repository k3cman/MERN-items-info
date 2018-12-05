import { GET_ITEMS, UPDATE_ITEMS } from "../actions/types";

const initialState = {
  loading: true,
  data: [],
  categories: [],
  brands: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        loading: false,
        data: action.payload.all,
        categories: action.payload.catList,
        brands: action.payload.brandList
      };
    case UPDATE_ITEMS:
      return {
        loading: false,
        items: action.payload
      };
    default:
      return state;
  }
};
