/**
 * @description 配置部分接口，config
 */
import { API } from './base.js';

export const getUserConfig = (offset, limit, search = null) => {
    return API.get('/config/', {
        params: {
            offset,
            limit,
            search
        }
    })
};