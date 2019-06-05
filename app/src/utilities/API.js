import axios from 'axios';
class API {

    constructor({ url }){
        this.url = url;
        this.endpoints = {};
        this.apiKey = ''; //put your own key here
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
        return axios.get(`${this.url}/movie/${id}`, Object.assign({ params: {api_key: this.apiKey, append_to_response: "videos,images"}, config }));
    }
}

export default API;