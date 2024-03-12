<script setup>
import { reactive, ref, nextTick, onMounted, watch } from 'vue';
import SiteItem from './site-item.vue';

defineOptions({
    name: 'SiteList'
});

const props = defineProps(['data']);
const emit = defineEmits(['refresh']);
</script>

<template>
    <div class="main">
        <div style="padding: 16px 0;">
            <el-row :gutter="14">
                <el-col v-for="(item, index) in props.data" :key="`item-${index}`" :span="8" style="margin-bottom: 32px;">
                    <site-item :data="item" />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
/* main 样式 */
</style>