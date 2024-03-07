/**
 * @description store，数据仓库
 */
import { defineStore } from "pinia";
import { useMenuStore } from "./useMenu.js";
import { useUserStore } from "./useUser.js";

export const useGlobalStore = defineStore('global', () => {
    const menuStore = useMenuStore();
    const userStore = useUserStore();

    return { menuStore, userStore };
});