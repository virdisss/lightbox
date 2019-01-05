import {combineReducers} from 'redux';
import gifs from './gifReducer';
import filtering from './loaderReducer';

const rootReducer = combineReducers({gifs, filtering});

export default rootReducer;