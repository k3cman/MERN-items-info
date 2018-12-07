import {
  GET_ITEMS,
  UPDATE_CATEGORY,
  UPDATE_BRAND,
  SEARCH_ITEMS,
  FILTERS_ACTIVE
} from "../actions/types";

const initialState = {
  loading: true,
  data: [],
  categories: [],
  brands: [],
  filters: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        loading: false,
        data: action.payload.all,
        categories: action.payload.catList,
        checked: action.payload.catList,
        brands: action.payload.brandList,
        filters: false
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
    case SEARCH_ITEMS:
      return {
        ...state,
        loading: false,
        data: action.payload.all,
        checked: action.payload.catList
      };
    case FILTERS_ACTIVE:
      return {
        ...state,
        filters: true
      };
    default:
      return state;
  }
};
