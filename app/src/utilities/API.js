import axios from 'axios';
class API {

    constructor({ url }){
        this.url = url;
        this.endpoints = {};
        this.apiKey = '540700bd5f61016b697371b5145631b9';
    }

    findMovie(keyword, page, config={}) {
        return axios.get(`${this.url}/search/movie`, Object.assign(
            { params: {
                query:keyword,
                api_key: this.apiKey,
                page: page || 1
            }, config }));
    }

    getVideos(id, config) {
        return axios.get(`${this.url}/movie/${id}/videos`, Object.assign({ params: {api_key: this.apiKey}, config }));
    }
}

export default API;