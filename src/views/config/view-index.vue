<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import ConfigList from './components/config-list.vue';

const router = useRouter();
const jumpConfigCreate = () => {
    router.push('/config/create');
};

const inputSearch = ref('');

const pageInfo = reactive({
    currentPage: 2,
    pageSize: 10,
    total: 20
});
</script>

<template>
    <div class="main">
        <div class="content-top">
            <el-card shadow="never">
                <div class="banner-top">
                    <span class="titleSmall">我的配置</span>
                    <el-button type="primary" @click="jumpConfigCreate" plain>新建</el-button>
                </div>
                <el-input v-model="inputSearch" placeholder="输入关键词，回车查找配置" clearable />
            </el-card>
        </div>
        <div class="content-bottom">
            <el-card shadow="never" style="margin-bottom: 14px;">
                <config-list />
            </el-card>
            <el-pagination
                v-model:current-page="pageInfo.currentPage"
                v-model:page-size="pageInfo.pageSize"
                :disabled="false"
                layout="total, prev, pager, next, jumper"
                :total="pageInfo.total"
                @current-change=""
            />
        </div>
    </div>
</template>

<style scoped>
/* main 样式 */
.main {
    padding: 0;
}

.content-top {
    max-width: 968px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
}

.titleSmall {
    font-weight: 600;
    font-size: 1.3rem;
}

.banner-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.content-bottom {
    max-width: 968px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
}

.content-bottom .begin {
    margin-top: 16px;
}

.content-bottom .begin h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 12px;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>