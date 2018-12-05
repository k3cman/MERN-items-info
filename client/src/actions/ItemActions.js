import { GET_ITEMS, UPDATE_CATEGORY, UPDATE_CATEGORY_CHECK } from "./types";

export const getItems = () => dispatch => {
  fetch("http://localhost:5000/collections/all")
    .then(res => res.json())
    .then(data => dispatch({ type: GET_ITEMS, payload: data }));
};

export const updateCategories = categories => dispatch => {
  let cats = categories;
  let joi = cats.join("','");
  console.log(joi);

  fetch(`http://localhost:5000/collections/c/${joi}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: UPDATE_CATEGORY,
        payload: data
      })
    );
};

export const updateCheckedCat = cat => dispatch => {
  dispatch({
    type: UPDATE_CATEGORY_CHECK,
    payload: cat
  });
};
