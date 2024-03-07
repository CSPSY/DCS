<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const jumpConfigCreate = () => {
    router.push('/config/create');
};

const inputSearch = ref('');

const pageInfo = reactive({
    currentPage: 2,
    pageSize: 10,
    total: 20
})

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
        <div class="content-top">
            <el-card shadow="never">
                <div class="banner-top">
                    <span class="titleSmall">
                        我的配置
                    </span>
                    <el-button type="primary" @click="jumpConfigCreate" plain>新建</el-button>
                </div>
                <el-input v-model="inputSearch" placeholder="输入关键词，回车查找配置" clearable />
            </el-card>
        </div>
        <div class="content-bottom">
            <el-card shadow="never" style="margin-bottom: 14px;">
                <el-table :data="tableData" style="width: 100%;" :show-header="false">
                    <el-table-column prop="configValue" label="配置" />
                    <el-table-column align="right" label="操作" >
                        <template #default>
                            <el-button link type="primary" size="small">编辑</el-button>
                            <el-button link type="primary" size="small">详情</el-button>
                            <el-button link type="danger" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
            <el-pagination
                v-model:current-page="pageInfo.currentPage"
                v-model:page-size="pageInfo.pageSize"
                :disabled="false"
                layout="total, prev, pager, next, jumper"
                :total="pageInfo.total"
                @current-change=""
            />
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

.button {
    color: black;
}
.button:focus,
.button:hover {
    color: #0052d9;
}
</style>