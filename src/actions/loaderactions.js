import * as types from './actionTypes';

export function setLoader() {
    return {type: types.LOADING}
}

export function done() {
    return {type: types.DONE};
}
