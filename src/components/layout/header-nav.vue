<script setup>
import { MENU_LIST } from '../../utils/constants.js';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '../../stores/store.js';

defineOptions({
    name: 'HeaderNav'
});

const router = useRouter();
const { userStore } = useGlobalStore();
</script>

<template>
    <div class="header">
        <span class="title">DCS</span>
        <div style="margin-right: 12px;"
            v-for="menu in MENU_LIST" :key="menu.value"
            @click="router.push(menu.value)"
        >
            <el-button class="button" type="primary" text>{{ menu.label }}</el-button>
        </div>
        <span class="button" v-if="userStore.isLogin">Hello</span>
        <el-button v-else class="button" @click="router.push('/sign-in')">登录</el-button>
    </div>
</template>

<style scoped>
/* header 样式 */
.header {
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 12px;
}
.title {
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: .3rem;
    padding: 0 12px;
    margin-right: 32px;
}
.button:last-child {
    margin-left: auto;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>