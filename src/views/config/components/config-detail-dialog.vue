<script setup>
import { watch, ref } from 'vue';
import { CopyDocument } from '@element-plus/icons-vue';
import copy from 'copy-to-clipboard';

defineOptions({
    name: 'ConfigDetailDialog'
});

const props = defineProps(['detailDialogVisible']);
const emit = defineEmits(['closeDetailDialog']);
const isVisible = ref(false);

watch(
    () => props.detailDialogVisible,
    (newVal) => {
        isVisible.value = newVal;
    }
);

const handleClose = () => {
    emit('closeDetailDialog');
};

const handleCopy = () => {
    copy(`ddddddd`);
    ElMessage({ message: '复制成功', type: 'success' });
};
</script>

<template>
    <el-dialog v-model="isVisible" @close="handleClose" title="配置详情" width="500" align-center>
        <el-descriptions direction="vertical" :column="4" border>
            <el-descriptions-item :span="4" label="配置名">profile</el-descriptions-item>
            <el-descriptions-item :span="2" label="Slug">18100000000</el-descriptions-item>
            <el-descriptions-item :span="2" label="归属者 ID">Suzhou</el-descriptions-item>
            <el-descriptions-item :span="2" label="创建于">11111</el-descriptions-item>
            <el-descriptions-item :span="2" label="上次修改于">No.1188,</el-descriptions-item>
            <el-descriptions-item :span="4" label="访问链接">
                <el-link :icon="CopyDocument" @click="handleCopy">ddddddddd</el-link>
            </el-descriptions-item>
        </el-descriptions>
    </el-dialog>
</template>

<style scoped>
</style>