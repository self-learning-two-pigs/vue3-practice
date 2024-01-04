<script setup lang="ts">
import { useUser } from '@/stores/user';

interface NavLink {
  text: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    text: '全部帖子',
    link: '/'
  },
  {
    text: '我的帖子',
    link: '/my-posts'
  },
  {
    text: '我的收藏',
    link: '/collects'
  }
];

const { user } = useUser();
</script>
<template>
  <header>
    <h2>贴吧</h2>
    <div class="links">
      <RouterLink class="" v-for="navLink of navLinks" :to="navLink.link" :key="navLink.link">{{
        navLink.text
      }}</RouterLink>
    </div>
    <div>{{ user?.name }}</div>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background: var(--primary);
}

.links {
  a {
    margin-right: 30px;
    text-decoration: none;
    color: var(--text-primary);

    &.router-link-exact-active {
      color: var(--second-primary);
    }
  }
}
</style>
