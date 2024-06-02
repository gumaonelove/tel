import axios from 'axios';

const baseUrl = 'http://localhost:84';

export const $api = axios.create({
    baseURL: baseUrl,
});
