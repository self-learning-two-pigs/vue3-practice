<script setup lang="ts">
import { useUser } from '@/stores/user';
import UserDropdown from '@/components/user/UserDropdown.vue';
import { ref } from 'vue';

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

const open = ref(false);
const toggleOpen = () => {
  open.value = !open.value;
};
</script>
<template>
  <header>
    <h2>贴吧</h2>
    <div class="links">
      <RouterLink v-for="navLink of navLinks" :to="navLink.link" :key="navLink.link">{{
        navLink.text
      }}</RouterLink>
    </div>
    <span class="username" @click="toggleOpen">{{ user?.name }}</span>
    <UserDropdown :open="open" />
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

.username {
  cursor: pointer;
  user-select: none;
}
</style>
