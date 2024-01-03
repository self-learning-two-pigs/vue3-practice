<script setup lang="ts">
import type { PostModel } from '@/components/post.model';

interface PostProps {
  post: PostModel;
}
defineProps<PostProps>();
</script>
<template>
  <div class="post">
    <img :src="post.img" alt="post image" />
    <div class="content">
      <div class="title">{{ post.title }}</div>
      <div class="other">
        <span class="name">{{ post.createdByUserName }}</span>
        <span class="time">{{ post.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  width: 300px;
  height: 300px;
  border: 1px solid #1db6aa;
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 16px;
}

.post + .post {
  margin-left: 16px;
}

img {
  height: 200px;
  flex: none;
}

.content {
  flex: auto;
  padding: 16px;
}

.title {
  font-weight: 700;
  margin-bottom: 24px;
}

.other {
  display: flex;
  justify-content: space-between;
}
</style>
