<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userSignUp } from '../../api/user';

const router = useRouter();

const userInfo = ref({
    email: '',
    nickname: '',
    password: ''
});

const formRules = {
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    nickname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};

const handleSignUp = () => {
    const { email, password, nickname } = userInfo.value;
    if (email === '' || password === '' || nickname === '') {
        ElMessage({message: '请输入邮箱，用户名，密码', type: 'warning'});
        return;
    }
    const postObj = {
        email: email,
        nickname: nickname,
        password: password
    };
    userSignUp(postObj).then(res => {
        if (res.data.code !== 0) {
            throw new Error(res.data.msg);
        }
        ElMessage({ message: res.data.msg, type: 'success' });
        router.push('/sign-in');
    }).catch((err) => {
        ElMessage.error(err.response.data.msg);
    });
};
</script>

<template>
    <div class="content">
        <el-card class="info-card" shadow="hover">
            <template #header>
                <span>注册</span>
            </template>
            <section>
                <el-form :model="userInfo" :rules="formRules" ref="form" label-position="top">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="userInfo.email"></el-input>
                    </el-form-item>
                    <el-form-item label="用户名" prop="nickname">
                        <el-input v-model="userInfo.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="userInfo.password"></el-input>
                    </el-form-item>
                </el-form>
            </section>
            <template #footer>
                <div class="card-footer">
                    <el-button type="primary" @click="router.push('/sign-in')" text>已有账户</el-button>
                    <el-button type="success" @click="handleSignUp" text>注册</el-button>
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