import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.sampleapis.com/coffee/hot'
});

export default api;