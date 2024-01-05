<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePosts } from '@/stores/posts';
import PostAction from '@/components/post/PostAction.vue';
const {
  params: { id }
} = useRoute();
const { getById } = usePosts();
const post = getById(id);

const { toggleCollected } = usePosts();
const toggleCollect = (id: string, collect: boolean) => {
  toggleCollected(id, collect);
};
</script>
<template>
  <div v-if="post" class="post-detail">
    <RouterLink to="/" class="back">返回全部</RouterLink>
    <h3>{{ post.title }}</h3>
    <div class="name">{{ post.createdByUserName }}</div>
    <div class="time">{{ post.createdAt }}</div>
    <PostAction :collected="post.collected" @collect="toggleCollect(post.id, $event)" />
    <img :src="post.img" alt="post image" />
    <div>{{ post.content }}</div>
  </div>
  <div v-else>这篇帖子找不到啦</div>
</template>

<style scoped>
.post-detail {
  position: relative;

  .back {
    position: absolute;
  }
}

h3 {
  text-align: center;
}

.name,
.time {
  text-align: right;
}

img {
  width: 300px;
  margin: 32px 0;
}
</style>
