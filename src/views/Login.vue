<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUser } from '@/stores/user';
import { USERS } from '@/stores/constants';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const { setUser } = useUser();

const login = () => {
  const user = USERS.find((u) => u.name === username.value);
  if (user && password.value === 'password') {
    router.push('/');
    setUser(user);
    return;
  }
  error.value = '用户名或者密码不正确';
};

const clearError = () => {
  error.value = '';
};
</script>

<template>
  <div class="login">
    <h3>登录</h3>
    <label>用户名</label>
    <input v-model="username" @input="clearError" />
    <label>密码</label>
    <input v-model="password" @input="clearError" />
    <button @click="login">登录</button>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<style scoped>
.login {
  align-self: center;
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 24px;
  width: 200px;
}

h3 {
  text-align: center;
}

button {
  background: var(--primary);
  border-color: var(--dark-primary);
  box-shadow: none;
  padding: 8px 16px;
  border-radius: 4px;
  align-self: center;
  cursor: pointer;
}
</style>
