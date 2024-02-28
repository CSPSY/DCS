/**
 * @description 工具类
 */
import { router } from "../router";

// 路由跳转
const jumpConfigCreate = () => {
    router.push('/config/create');
};

const jumpSite = () => {
    router.push('/site');
}

export { jumpConfigCreate, jumpSite };