<script setup>
import { reactive, ref } from 'vue';

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
    <div class="common-layout">
        <el-container>
            <el-header class="header">
                <span class="title">DCS</span>
                <RouterLink :to="{ path: '/' }">
                    <el-button class="button" type="primary" text>首页</el-button>
                </RouterLink>
                <RouterLink :to="{ path: '/config' }">
                    <el-button style="background-color: #f2f3ff; color: #4e52d9;" class="button" type="primary" text>配置</el-button>
                </RouterLink>
                <RouterLink :to="{ path: '/site' }">
                    <el-button class="button" type="primary" text>站点</el-button>
                </RouterLink>
                <el-button class="button">登录</el-button>
            </el-header>
            <el-main class="main">
                <div class="content-top">
                    <el-card shadow="never">
                        <div class="banner-top">
                            <span class="titleSmall">
                                我的配置
                            </span>
                            <el-button type="primary" plain>新建</el-button>
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
                                    <el-button link type="primary" size="small">删除</el-button>
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