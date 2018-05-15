import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgertestapp.firebaseio.com/'
});

export default instance;