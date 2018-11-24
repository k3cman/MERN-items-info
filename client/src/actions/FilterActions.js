import {GET_FILTERS, UPDATE_ITEMS} from './types';

export const getFilters = () => dispatch => {
    fetch('https://enmon-nl-server.herokuapp.com/items/data/')
        .then(res => res.json())
        .then(data => dispatch({
            type:GET_FILTERS,
            payload: data
        }))
        .catch(err => console.log(err))
}

export const updateItems = (filters) => dispatch => {
    const replaced = filters.replace('Č','C')
    fetch(`https://enmon-nl-server.herokuapp.com/items/cat/${replaced}`)
    .then(res => res.json())
    .then(data=> dispatch({
        type:UPDATE_ITEMS,
        payload:data
    }))
}

export const searchItems = (filter) => dispatch => {
    fetch(`https://enmon-nl-server.herokuapp.com/items/search/${filter}`)
    .then(res => res.json())
    .then(data => dispatch({
        UPDATE_ITEMS,
        payload:data
    }))
}