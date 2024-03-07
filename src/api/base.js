/**
 * @description api 接口
 */
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://h.exia.xyz',
});

// API 请求拦截器
API.interceptors.request.use((req) => {
    const psToken = localStorage.getItem('PS_TOKEN');
    if (psToken) {
        req.headers.Authorization = psToken;
    }
    return req;
});

export default API;