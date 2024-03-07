<script setup>
import { reactive, ref, onMounted } from 'vue';
import ViewSider from './components/view-sider.vue';
import ConfigEditor from './components/config-editor.vue';

</script>

<template>
    <div class="main">
        <el-row class="content">
            <el-col class="content-left" :xs="24" :sm="6">
                <view-sider />
            </el-col>
            <el-col class="content-right" :xs="24" :sm="18">
                <ConfigEditor />
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
/* main 样式 */
.main {
    padding: 0;
}

.content {
    display: flex;
    height: 80vh;
}

.content-left {
    padding: 8px 16px;
    height: 100%;
}

.content-right {
    padding: 8px;
    height: 100%;
}
</style>