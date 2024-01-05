<script setup lang="ts">
import { useUser } from '@/stores/user';
import { useRouter } from 'vue-router';

const { setUser } = useUser();
const router = useRouter();
const logout = () => {
  setUser(undefined);
  router.push('/login');
};
</script>

<template>
  <ul>
    <li @click="logout">登出</li>
  </ul>
</template>

<style scoped>
ul {
  border: 1px solid var(--dark-primary);
  margin: 0;
  padding: 0;
  width: 100px;
  background: var(--primary);
  list-style: none;
  border-radius: 4px;
}

li {
  padding: 4px 8px;
}
</style>
