import axios from 'axios';

const baseUrl = 'https://dialo.saf.tatar';

export const $api = axios.create({
    baseURL: baseUrl,
});
