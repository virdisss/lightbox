import * as types from '../actions/actionTypes';

export default function gifReducer(state=[], action) {

    switch(action.type) {
        case types.FETCH:
            return [...action.payload];
        case types.FETCH_MORE:
            return [...state, ...action.payload]; 
        default:
            return state;    
    }
}