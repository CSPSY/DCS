<script setup>
import { EditPen }  from '@element-plus/icons-vue';

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">
                <span class="title">DCS</span>
                <RouterLink :to="{ path: '/' }">
                    <el-button style="background-color: #f2f3ff; color: #4e52d9;" class="button" type="primary" text>首页</el-button>
                </RouterLink>
                <RouterLink :to="{ path: '/config' }">
                    <el-button class="button" type="primary" text>配置</el-button>
                </RouterLink>
                <RouterLink :to="{ path: '/site' }">
                    <el-button class="button" type="primary" text>站点</el-button>
                </RouterLink>
                <el-button class="button">登录</el-button>
            </el-header>
            <el-main class="main">
                <div class="banner">

                </div>
                <div class="content">
                    <el-card class="box-card" shadow="never">
                        <template #header>
                            <div class="card-header">
                                <span>DCS</span>
                            </div>
                        </template>
                        <div>
                            Dynamic Configuartion System，你可以快速建立动态配置并应用于你的站点。
                        </div>
                    </el-card>
                    <section class="begin">
                        <h3>快速开始</h3>
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-card class="box-card" shadow="hover">
                                    <template #header>
                                        <div class="card-header" style="font-weight: 600;">
                                            <span>登录</span>
                                        </div>
                                    </template>
                                    <div style="font-size: 14px;">
                                        点击右上角以进行登录。
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card class="box-card" shadow="hover">
                                    <template #header>
                                        <div class="card-header" style="font-weight: 600;">
                                            <span>创建配置</span>
                                            <el-button class="button" text><el-icon><EditPen /></el-icon></el-button>
                                        </div>
                                    </template>
                                    <div style="font-size: 14px;">
                                        创建一个配置，支持JSON格式。
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card class="box-card" shadow="hover">
                                    <template #header>
                                        <div class="card-header" style="font-weight: 600;">
                                            <span>创建站点</span>
                                            <el-button class="button" text><el-icon><EditPen /></el-icon></el-button>
                                        </div>
                                    </template>
                                    <div style="font-size: 14px;">
                                        创建一个站点，并输入域名、关联配置。<br/>配置关联后，只有该域名才能访问对应配置。
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </section>
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