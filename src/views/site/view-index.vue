<script setup>
import { reactive, ref, nextTick } from 'vue';
import SiteList from './components/site-list.vue';

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
    <div class="main">
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
                            <el-button @click="dialogSiteNewVisible = false">取消</el-button>
                            <el-button type="primary" @click="() => {console.log(formData)}">确认</el-button>
                        </div>
                        </template>
                    </el-dialog>
                </div>
                <el-input v-model="inputSearch" placeholder="输入关键词，回车查找站点" clearable />
            </el-card>
        </div>
        <div class="content-bottom">
            <site-list />
        </div>
    </div>
</template>

<style scoped>
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


.input-area {
    margin-top: 12px;
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