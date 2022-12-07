import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.16.164:5000',
});

export default Api;