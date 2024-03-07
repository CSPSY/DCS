/**
 * @description store，数据仓库
 */
import { defineStore } from "pinia";
import { useMenuStore } from "./menu.js";

export const useGlobalStore = defineStore('global', () => {
    const menuStore = useMenuStore();

    return { menuStore };
});