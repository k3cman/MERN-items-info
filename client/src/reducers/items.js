import {GET_ITEMS} from '../actions/types';

const initialState = {
    loading:true,
    items:[]
};

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ITEMS:
            return {
                loading:false,
                items:action.payload
            }
        default:
            return state;
    }
}