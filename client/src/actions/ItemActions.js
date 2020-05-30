import {
  GET_ITEMS,
  UPDATE_CATEGORY,
  UPDATE_BRAND,
  SEARCH_ITEMS,
  FILTERS_ACTIVE
} from "./types";

export const getItems = () => dispatch => {
  fetch("http://apps.enmongroup.com:5000/coll/all")
    .then(res => res.json())
    .then(data => dispatch({ type: GET_ITEMS, payload: data }));
};

export const updateCategories = categories => dispatch => {
  let cats = categories;
  let joi = cats.join("','");
  dispatch({ type: FILTERS_ACTIVE });
  fetch(`http://apps.enmongroup.com:5000/coll/c/${joi}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: UPDATE_CATEGORY,
        payload: data
      })
    );
};

export const searchItems = input => dispatch => {
  dispatch({ type: FILTERS_ACTIVE });
  fetch(`http://apps.enmongroup.com:5000/coll/search/${input}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SEARCH_ITEMS,
        payload: data
      })
    );
};

export const updateItemsBrand = brand => dispatch => {
  dispatch({ type: FILTERS_ACTIVE });
  fetch(`http://apps.enmongroup.com:5000/coll/b/${brand}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: UPDATE_BRAND,
        payload: data
      })
    );
};
