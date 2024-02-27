/**
 * @description 路由配置
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/config',
        component: () => import('../views/config_view/Config.vue'),
        meta: {
            title: '配置'
        }
    },
    {
        path: '/site',
        component: () => import('../views/site_view/Site.vue'),
        meta: {
            title: '站点'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // 路由发送变化时，更改页面 title
    if (to.meta.title) {
        document.title = 'DCS | ' + to.meta.title
    }
    next()
});

export { router };