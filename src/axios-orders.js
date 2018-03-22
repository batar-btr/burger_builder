import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://btrn-burger-builder.firebaseio.com/'
});

export default instance;