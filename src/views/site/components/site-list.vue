<script setup>
import { reactive, ref, nextTick } from 'vue';
import SiteItem from './site-item.vue';

defineOptions({
    name: 'SiteList'
});

const inputSearch = ref('');

const pageInfo = reactive({
    currentPage: 2,
    pageSize: 6,
    total: 20
})
</script>

<template>
    <div class="main">
        <div style="padding: 16px 0;">
            <el-row :gutter="14">
                <el-col v-for="(o, index) in 5" :key="o" :span="8" style="margin-bottom: 32px;">
                    <site-item />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
/* main 样式 */
</style>