<script setup>
import HeaderNav from '@/components/layout/header-nav.vue';
</script>

<template>
    <div>
        <el-container>
            <el-header><HeaderNav /></el-header>
            <el-main>
                <router-view :key="$route.fullPath"></router-view>
            </el-main>
            <el-footer class="footer">DCS 动态配置系统</el-footer>
        </el-container>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

a {
    text-decoration: none;
}

/* footer 样式 */
.footer {
    padding: 16px;
    text-align: center;
}
</style>
