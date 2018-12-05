import {
  GET_ITEMS,
  UPDATE_ITEMS,
  UPDATE_CATEGORY_CHECK,
  UPDATE_CATEGORY,
  UPDATE_BRAND
} from "../actions/types";

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
        checked: action.payload.catList,
        brands: action.payload.brandList
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        loading: false,
        data: action.payload.all,
        checked: action.payload.catList,
        brands: action.payload.brandList
      };
    case UPDATE_BRAND:
      return {
        ...state,
        loading: false,
        data: action.payload.all,
        checked: action.payload.catList
      };
    default:
      return state;
  }
};
