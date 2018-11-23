import {GET_ITEMS} from './types';

export const getItems = () => dispatch => {
    fetch('https://enmon-nl-server.herokuapp.com/items/')
        .then(res => res.json())
        .then(data => dispatch({
            type:GET_ITEMS,
            payload: data
        }))
        .catch(err => console.log(err))
}