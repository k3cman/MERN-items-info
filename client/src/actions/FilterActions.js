import {GET_FILTERS} from './types';

export const getFilters = () => dispatch => {
    fetch('https://enmon-nl-server.herokuapp.com/items/data/')
        .then(res => res.json())
        .then(data => dispatch({
            type:GET_FILTERS,
            payload: data
        }))
        .catch(err => console.log(err))
}