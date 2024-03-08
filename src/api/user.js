/**
 * @description 用户接口
 */
import axios from 'axios';
import API from './base';

const APILogin = axios.create({
    baseURL: 'https://h.exia.xyz',
});

// 校验 token
export const validateToken = (dcsToken) => {
    return API.get('user/validate', { headers: { Authorization: dcsToken } });
};

// 获取用户信息
export const getUserData = (id) => {
    return API.get(`/user/${id}`);
};