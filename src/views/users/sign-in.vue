<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userSignIn } from '../../api/user';

const router = useRouter();

const userInfo = ref({
    email: '',
    password: ''
});

const formRules = {
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};

const handleSignIn = () => {
    const { email, password } = userInfo.value;
    if (email === '' || password === '') {
        ElMessage({message: '请输入邮箱，密码', type: 'warning'});
        return;
    }
    const postObj = {
        email: email,
        password: password
    };
    userSignIn(postObj).then(res => {
        if (res.data.code !== 0) {
            // console.log(res.data.msg);
            throw new Error(res.data.msg);
        }
        ElMessage({ message: res.data.msg, type: 'success' });
        localStorage.setItem('PS_TOKEN', res.data.data.token);
        router.push('/');
    }).catch((err) => {
        ElMessage.error(err.response.data.msg);
    });
};
</script>

<template>
    <div class="content">
        <el-card class="info-card" shadow="hover">
            <template #header>
                <span>登录</span>
            </template>
            <section>
                <el-form :model="userInfo" :rules="formRules" ref="form" label-position="top">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="userInfo.email" placeholder="xxx@xx.com"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="userInfo.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <div style="font-size: 14px; opacity: 0.7; padding-top: 6px;">
                        <span>还没有注册的话，点击左下方的注册 ~</span>
                    </div>
                </el-form>
            </section>
            <template #footer>
                <div class="card-footer">
                    <el-button type="primary" @click="router.push('sign-up')" text>注册</el-button>
                    <el-button type="success" @click="handleSignIn" text>登录</el-button>
                </div>
            </template>
        </el-card>
    </div>
</template>

<style scoped>
.content {
    height: 100vh;
}
.info-card {
    width: 360px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.card-footer {
    display: flex;
    justify-content: space-between;
}
</style>