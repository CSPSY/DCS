/**
 * @description 用户接口
 */
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://h.exia.xyz',
});

// 登录
const userSignIn = (postObj) => {
    return API.post('/user/login', postObj);
};

// 注册
const userSignUp = (postObj) => {
    return API.post('/user/register', postObj);
};

export { userSignIn, userSignUp };