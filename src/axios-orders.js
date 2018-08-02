import axios from 'axios';

const instance = axios.create({
    baseURL: 'your api endpoint'
});

export default instance;