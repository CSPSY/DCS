<script setup>
import { reactive, ref, nextTick } from 'vue';

const inputSearch = ref('');

const pageInfo = reactive({
    currentPage: 2,
    pageSize: 6,
    total: 20
})

// 新建站点对话框
const dialogSiteNewVisible = ref(false);

const formData = ref({
    siteName: '',
    configRelate: [],
});

const formRules = {
    siteName: [{ required: true, message: '请输入站点名', trigger: 'change' }],
    configRelate: [{ type: 'array', required: true, message: '请先完成此项', trigger: 'blur' }],
};

// 关联配置 --- 搜索
const filterMethod = (query, item) => {
    return item.label.includes(query);
}

const data = reactive([
    {
        key: 1,
        label: "简易版个人简介",
    },
    {
        key: 2,
        label: "简易版",
    },
    {
        key: 3,
        label: "简介",
    },
    {
        key: 4,
        label: "个人简介",
    },
    {
        key: 5,
        label: "profile",
    },
]);


// 动态增减域名
const inputValue = ref('');
const dynamicTags = ref([]);
const inputVisible = ref(false);
const InputRef = ref();

const handleClose = (tag) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
    inputVisible.value = true;
    nextTick(() => {
        InputRef.value.focus();
    });
};

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
    }
    inputVisible.value = false;
    inputValue.value = '';
};
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
                    <el-button class="button" type="primary" text>配置</el-button>
                </RouterLink>
                <RouterLink :to="{ path: '/site' }">
                    <el-button style="background-color: #f2f3ff; color: #4e52d9;" class="button" type="primary" text>站点</el-button>
                </RouterLink>
                <el-button class="button">登录</el-button>
            </el-header>
            <el-main class="main">
                <div class="content-top">
                    <el-card shadow="never">
                        <div class="banner-top">
                            <span class="titleSmall">
                                我的站点
                            </span>
                            <!-- 新建站点 -->
                            <el-button type="primary" plain @click="dialogSiteNewVisible = true">新建</el-button>
                            <el-dialog v-model="dialogSiteNewVisible" title="创建站点" width="600" draggable>
                                <section class="input-area">
                                    <el-form :model="formData" :rules="formRules" ref="form" label-position="top">
                                        <el-form-item label="站点名" prop="siteName">
                                            <el-input v-model="formData.siteName" placeholder="请输入"></el-input>
                                        </el-form-item>
                                        <el-form-item label="关联配置" prop="configRelate">
                                            <el-transfer
                                                v-model="formData.configRelate"
                                                filterable
                                                :filter-method="filterMethod"
                                                filter-placeholder="请输入关键词搜索"
                                                :titles="['未关联', '已关联']"
                                                :data="data"
                                            />
                                        </el-form-item>
                                        <el-form-item label="域名">
                                            <el-tag
                                                v-for="tag in dynamicTags"
                                                :key="tag"
                                                closable
                                                :disable-transitions="false"
                                                @close="handleClose(tag)"
                                            >
                                            {{ tag }}
                                            </el-tag>
                                            <el-input
                                                v-if="inputVisible"
                                                ref="InputRef"
                                                v-model="inputValue"
                                                @keyup.enter="handleInputConfirm"
                                                @blur="handleInputConfirm"
                                            />
                                            <el-button v-else class="button-new-tag" size="small" @click="showInput">
                                                + 域名
                                            </el-button>
                                        </el-form-item>
                                    </el-form>
                                </section>
                                
                                <template #footer>
                                <div class="dialog-footer">
                                    <el-button @click="dialogSiteNewVisible = false">
                                        取消
                                    </el-button>
                                    <el-button type="primary" @click="() => {console.log(formData)}">
                                        确认
                                    </el-button>
                                </div>
                                </template>
                            </el-dialog>
                        </div>
                        <el-input v-model="inputSearch" placeholder="输入关键词，回车查找站点" clearable />
                    </el-card>
                </div>
                <div class="content-bottom">
                    <div style="padding: 16px 0;">
                    <el-row :gutter="14">
                        <el-col
                            v-for="(o, index) in 5"
                            :key="o"
                            :span="8"
                            style="margin-bottom: 32px;"
                        >
                            <el-card
                                :body-style="{
                                    padding: '0px 12px', display: 'flex', alignItems: 'center', height: '100%', fontSize: '14px'
                                }"
                                shadow="never"
                            >
                                <template #header>
                                    <div class="card-header">
                                        <span>站点</span>
                                        <el-button class="button" text>操作</el-button>
                                    </div>
                                </template>
                                <div style="padding: 14px; display: flex; flex-direction: column; width: 100%;">
                                    <div style="margin-bottom: 14px; display: flex; justify-content: space-between;">
                                        <el-tag :disable-transitions="true" type="success">域名</el-tag>
                                        <span >http://localhost:8081/</span>
                                    </div>
                                    <div style="display: flex; justify-content: space-between;">
                                        <el-tag :disable-transitions="true" type="success">配置数</el-tag>
                                        <span>1</span>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-pagination
                        layout="total, prev, pager, next, jumper" :total="pageInfo.total"
                        :page-size="pageInfo.pageSize"
                        v-model:current-page="pageInfo.currentPage"
                        @current-change=""
                    />
                </div>
            </div>
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

.content-top {
    max-width: 968px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
}

.titleSmall {
    font-weight: 600;
    font-size: 1.3rem;
}

.banner-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.content-bottom {
    max-width: 968px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
}

.content-bottom .begin {
    margin-top: 16px;
}

.content-bottom .begin h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 12px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input-area {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
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

.el-card :deep(.el-card__header) {
    padding-top: 0px;
    padding-bottom: 0px;
    height: 56px;
    line-height: 56px;
}
</style>