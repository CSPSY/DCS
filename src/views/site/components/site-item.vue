<script setup>
import { onMounted, computed } from 'vue';

defineOptions({
    name: 'SiteItem'
});

const props = defineProps(['data']);

const displayDomainText = computed(() => {
    if (props.data.domains.length >= 1) {
        return props.data.domains[0];
    }

    return '-';
});

onMounted(()=>{
    console.log(props.data);
})
</script>

<template>
    <div class="main">
        <el-card :body-style="{ padding: '0px 6px', display: 'flex', alignItems: 'center', height: '100%', fontSize: '14px' }" shadow="never">
            <template #header>
                <div class="card-header">
                    <span>{{ props.data.name }}</span>
                    <el-popover placement="bottom-start" :width="120" trigger="hover">
                        <template #reference>
                            <el-button style="padding: 0; color: #0052d9;" text>操作</el-button>
                        </template>
                        <div style="display: flex; flex-direction: column;">
                            <el-button style="margin: 0;" text>编辑</el-button>
                            <el-button style="margin: 0;" text>详情</el-button>
                            <el-button style="margin: 0;" type="danger" text>删除</el-button>
                        </div>
                    </el-popover>
                </div>
            </template>
            <div style="padding: 14px; display: flex; flex-direction: column; width: 100%;">
                <div style="margin-bottom: 14px; display: flex; justify-content: space-between;">
                    <el-tag :disable-transitions="true" type="success">域名</el-tag>
                    <span>
                        {{ displayDomainText }}
                        <el-tag v-if="data.domains.length > 1" round size="small">+{{ data.domains.length - 1 }}</el-tag>
                    </span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <el-tag :disable-transitions="true" type="success">配置数</el-tag><span>{{ props.data.configs.length }}</span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
/* main 样式 */
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}

.el-card :deep(.el-card__header) {
    padding-top: 0px;
    padding-bottom: 0px;
    height: 56px;
    line-height: 56px;
}
</style>