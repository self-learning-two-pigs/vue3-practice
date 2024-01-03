<script setup lang="ts">
import type { PostModel } from '@/components/post.model';
import { onMounted, ref } from 'vue';
import { POSTS } from '@/components/constants';
import { useRoute } from 'vue-router';
const {
  params: { id }
} = useRoute();
const post = ref<PostModel>();
onMounted(() => {
  post.value = POSTS.find((p) => p.id === id);
});
</script>
<template>
  <div v-if="post" class="post-detail">
    <RouterLink to="/" class="back">返回全部</RouterLink>
    <h3>{{ post.title }}</h3>
    <div class="name">{{ post.createdByUserName }}</div>
    <div class="time">{{ post.createdAt }}</div>
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
