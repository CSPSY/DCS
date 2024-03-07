<script setup>
import { reactive, ref } from 'vue';

defineOptions({
    name: 'ViewSider'
});

const formData = ref({
    configName: '',
    configSlug: ''
});

const formRules = {
    configName: [{ required: true, message: '请输入配置名', trigger: 'blur' }],
    configSlug: [{ required: true, message: '请输入 Slug', trigger: 'blur' }]
};

const slugShow = ref('slug');

const handleConfigCreate = () => {

};
</script>

<template>
    <div class="main">
        <section>
            <h3 style="font-size: 1.5rem; font-weight: 400;">创建配置</h3>
        </section>
        <section class="input-area">
            <el-form :model="formData" :rules="formRules" ref="form" label-position="top">
                <el-form-item label="配置名" prop="configName">
                    <el-input v-model="formData.configName"></el-input>
                </el-form-item>
                <el-form-item label="Slug" prop="configSlug">
                    <el-input v-model="formData.configSlug"></el-input>
                </el-form-item>
                <div style="font-size: 14px; opacity: 0.7; padding-top: 6px; margin-bottom: 26px;">
                    <span>可通过以下链接获取配置<br>{{`https://mdb.exia.xyz/config/get?slug=\{${slugShow}\}`}}</span>
                </div>
                <el-button type="primary" @click="handleConfigCreate">创建</el-button>
            </el-form>
        </section>
    </div>
</template>

<style scoped>
/* main 样式 */
.input-area {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>