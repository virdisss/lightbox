import * as types from './actionTypes';
import gifApi from '../api/gifApi';
import * as loader from './loaderactions';

export function loadGifsSuccess(gifs) {
    return {type: types.FETCH, payload: gifs};
}

export function loadMoreGifsSuccess(gifs) {
    return {type: types.FETCH_MORE, payload: gifs};
}

export  function fetchGifs(filter) {

    return function(dispatch) {
        return gifApi.findByKey(filter).then((resp) => {
            dispatch(loader.done());
            dispatch(loadGifsSuccess(resp.data.data));
        }).catch(err => {throw(err)});
    }
}

export  function fetchMoreGifs(filter) {

    return function(dispatch) {
        return gifApi.findByKey(filter).then((resp) => {
           
            dispatch(loadMoreGifsSuccess(resp.data.data));
        }).catch(err => {throw(err)});
    }
}