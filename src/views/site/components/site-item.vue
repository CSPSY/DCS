<script setup>
defineOptions({
    name: 'SiteItem'
});

</script>

<template>
    <div class="main">
        <el-card :body-style="{ padding: '0px 6px', display: 'flex', alignItems: 'center', height: '100%', fontSize: '14px' }" shadow="never">
            <template #header>
                <div class="card-header">
                    <span>站点</span>
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
                    <el-tag :disable-transitions="true" type="success">域名</el-tag><span >http://localhost:8081/</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <el-tag :disable-transitions="true" type="success">配置数</el-tag><span>2</span>
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