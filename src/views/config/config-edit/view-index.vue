<script setup>
import { reactive, ref, onMounted, computed } from 'vue';
import ViewSider from './components/view-sider.vue';
import ConfigEditor from './components/config-editor.vue';
import { useRoute, useRouter } from 'vue-router'; 
import { useConfigStore } from './store';
import { createConfig, getConfig, updateConfig } from '@/api/config';

const configStore = useConfigStore();
const route = useRoute();
const router = useRouter();

const isCreate = computed(() => {
    return route.name === 'config-create';
});

// 创建配置
const addConfig = () => {
    console.log(configStore.getConfigData());
    return createConfig(configStore.getConfigData()).then((res) => {
        if (res.data.code === 0) {
            MessagePlugin.success('创建成功');
            router.push('/config');
        } else {
            throw new Error(res.data.msg)
        }
    });
};

// 更新配置
const editConfig = () => {
    console.log(configStore.getConfigData());
};

// 创建 / 更新配置
const confirmRequest = () => {
    const request = isCreate.value ? addConfig() : editConfig();

    request.catch((err) => {
        ElMessage.error(err.message);
    });
};

onMounted(() => {
    if (!isCreate.value) {
        getConfig(route.params.slug).then((res) => {
            if (res.data.code !== 0) {
                throw new Error(res.data.msg);
            }
            configStore.updateMeta(res.data.data.name, res.data.data.slug)
            configStore.updateContent(res.data.data.data);
        }).catch((e) => {
            ElMessage.error(e.message);
            router.go(-1);
        })
    }
});
</script>

<template>
    <div class="main">
        <el-row class="content">
            <el-col class="content-left" :xs="24" :sm="6">
                <view-sider :is-create="isCreate" @confirm="confirmRequest" />
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