import {combineReducers} from 'redux'
import filters from './filters';
import items from './items'
export default combineReducers({
    filters,
    items
})