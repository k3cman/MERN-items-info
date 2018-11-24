import {GET_FILTERS} from '../actions/types'

const initialState=[
    ['PLOČICE','BATERIJE'],
    ['Marazzi']
]

export default (state = initialState, action) => {
    switch(action.type){
        case GET_FILTERS:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}