import { GET_ITEMS, GET_BRANDS } from "../actions/types";

const initialState = {
  loading: true,
  brands: [],
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        loading: false,
        brands: action.payload
      };
    default:
      return state;
  }
};
