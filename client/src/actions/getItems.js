import { GET_BRANDS } from "./types";

export const getBrands = () => dispatch => {
  fetch("http://localhost:5000/api/brands")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_BRANDS,
        payload: data
      })
    )
    .catch(err => console.log(err));
};
