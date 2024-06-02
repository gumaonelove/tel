import axios from 'axios';

const baseUrl = 'http://backend:84';

export const $api = axios.create({
    baseURL: baseUrl,
});
