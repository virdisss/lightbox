import axios from 'axios';
import * as config from '../config/config';

class GifApi {

    static findByKey(filter) {
    
        return axios.get(config.BASE_URL + '?q=' + filter.keyword + '&api_key='
            + config.API_KEY + '&limit=' + filter.limit
            + '&offset=' + filter.offset);
    }
}

export default GifApi;