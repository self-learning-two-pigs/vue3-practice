<script setup lang="ts">
interface NavLink {
  text: string
  link: string
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
]
</script>
<template>
  <header>
    <h2>贴吧</h2>
    <div class="links">
      <RouterLink class="" v-for="navLink of navLinks" :to="navLink.link">{{
        navLink.text
      }}</RouterLink>
    </div>
    <div>用户信息</div>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background: #c9eed9;
}

.links {
  a {
    margin-right: 30px;
    text-decoration: none;
    color: #000;

    &.router-link-exact-active {
      color: #2ebaee;
    }
  }
}
</style>
