<script setup>
import { EditPen }  from '@element-plus/icons-vue';

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
                    <el-button class="button" type="primary" text>配置</el-button>
                </RouterLink>
                <RouterLink :to="{ path: '/site' }">
                    <el-button style="background-color: #f2f3ff; color: #4e52d9;" class="button" type="primary" text>站点</el-button>
                </RouterLink>
                <el-button class="button">登录</el-button>
            </el-header>
            <el-main class="main">
                <div class="banner">

                </div>
                <div class="content">
                    
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

.banner {
    background-color: #f1f5f9;
    height: 500px;
}

.content {
    max-width: 968px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
}

.content .begin {
    margin-top: 16px;
}

.content .begin h3 {
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