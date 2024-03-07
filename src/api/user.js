/**
 * @description 用户接口
 */
import axios from 'axios';
import API from './base';

const APILogin = axios.create({
    baseURL: 'https://h.exia.xyz',
});

// 登录
const userSignIn = (postObj) => {
    return APILogin.post('/user/login', postObj);
};

// 注册
const userSignUp = (postObj) => {
    return APILogin.post('/user/register', postObj);
};

// 获取用户信息
const getUserData = (id) => {
    return API.get(`/user/${id}`);
};

export { userSignIn, userSignUp };
export { getUserData };