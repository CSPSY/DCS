<script setup>
import { reactive, ref } from 'vue';
import ConfigDetailDialog from './config-detail-dialog.vue';

const detailDialogVisible = ref(false);

const showDetailDialog = () => {
    detailDialogVisible.value = true;
};

const closeDetailDialog = () => {
    detailDialogVisible.value = false;
};

defineOptions({
    name: 'ConfigList'
});

const tableData = [
  {
    configValue: '个人简介',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
  {
    configValue: 'easy version',
  },
];

</script>

<template>
    <div class="main">
        <el-table :data="tableData" style="width: 100%;" :show-header="false">
            <el-table-column prop="configValue" label="配置" />
            <el-table-column align="right" label="操作" >
                <template #default>
                    <el-button link type="primary" size="small">编辑</el-button>
                    <el-button link type="primary" size="small" @click="showDetailDialog">详情</el-button>
                    <el-button link type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <config-detail-dialog :detailDialogVisible="detailDialogVisible" @closeDetailDialog="closeDetailDialog" />
    </div>
</template>

<style scoped>
/* main 样式 */
</style>