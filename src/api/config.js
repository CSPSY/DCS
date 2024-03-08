/**
 * @description 配置部分接口，config
 */
import { API } from './base.js';
import qs from 'qs';

// 获取用户配置列表
export const getUserConfig = (offset, limit, search = null) => {
    return API.get('/config/', {
        params: {
            offset,
            limit,
            search
        }
    })
};

export const createConfig = (data) => {
    return API.post('/config', qs.stringify(data));
};

// 获取具体配置信息
export const getConfig = (slug) => {
    return API.get(`/config/${slug}`);
};

export const updateConfig = (slug, data) => {
    API.put<Restful<ConfigItem>>(`/config/${slug}`, qs.stringify(data));
};

export const readConfig = (slug) => {
    API.get(`/config/get`, { params: { slug } });
}