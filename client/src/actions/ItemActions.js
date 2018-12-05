import { GET_ITEMS } from "./types";

export const getItems = () => dispatch => {
  fetch("http://localhost:5000/collections/all")
    .then(res => res.json())
    .then(data => dispatch({ type: GET_ITEMS, payload: data }));
};
