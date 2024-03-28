/**
 * @description 工具类，api
 */
import axios from "axios";

// 获取首页小方框信息
export const getIndexCardInfo = () => {
    return axios.get('https://mdb.exia.xyz/config/get?slug=dcs-index');
};