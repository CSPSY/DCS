<script setup>
import { reactive, ref, onMounted } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

const formData = ref({
    configName: '',
    configSlug: ''
});

const formRules = {
    configName: [{ required: true, message: '请输入配置名', trigger: 'blur' }],
    configSlug: [{ required: true, message: '请输入 Slug', trigger: 'blur' }]
};

const slugShow = ref('slug');


// 右侧编辑器，Monaco Editor
const editorRef = ref();
let editor;

onMounted(() => {
    editor = monaco.editor.create(editorRef.value, {
        value: '',
        language: 'json',
        theme: 'vs-dark',
        automaticLayout: true,
    });
});

const handleConfigCreate = () => {
    console.log(editor.getValue());
}



</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">
                <span class="title">DCS</span>
                <RouterLink style="margin-right: 12px;" :to="{ path: '/' }">
                    <el-button class="button" type="primary" text>首页</el-button>
                </RouterLink>
                <RouterLink style="margin-right: 12px;" :to="{ path: '/config' }">
                    <el-button style="background-color: #f2f3ff; color: #4e52d9;" class="button" type="primary" text>配置</el-button>
                </RouterLink>
                <RouterLink :to="{ path: '/site' }">
                    <el-button class="button" type="primary" text>站点</el-button>
                </RouterLink>
                <el-button class="button">登录</el-button>
            </el-header>
            <el-main class="main">
                <el-row class="content">
                    <el-col class="content-left" :xs="24" :sm="6">
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
                    </el-col>
                    <el-col class="content-right" :xs="24" :sm="18">
                        <el-card style="height: 100%;" :body-style="{ padding: '0px', height: '100%' }" shadow="never">
                            <template #header>
                                <div class="card-header" style="font-weight: 600;">
                                    <span>编辑配置</span>
                                </div>
                            </template>
                            <div ref="editorRef" style="height: 100%;"></div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer class="footer">
                DCS 动态配置系统
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped>
/* header 样式 */
.header {
    height: 56px;
    display: flex;
    align-items: center;
}
.title {
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: .3rem;
    padding: 0 12px;
    margin-right: 32px;
}

.button:last-child {
    margin-left: auto;
}

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

.input-area {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
}

.content-right {
    padding: 8px;
    height: 100%;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* footer 样式 */
.footer {
    padding: 16px;
    text-align: center;
}

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>