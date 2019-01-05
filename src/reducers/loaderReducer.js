import * as types from '../actions/actionTypes';

export default function loadReducer(state=false, action) {

    switch(action.type) {
        case types.LOADING:
            return true;
        case types.DONE:
            return false;
        default:
            return state;    
    }
}