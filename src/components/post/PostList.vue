<script setup lang="ts">
import Post from '@/components/post/Post.vue';
import type { PostModel } from '@/model/post.model';

interface PostsProps {
  posts: PostModel[];
}
defineProps<PostsProps>();
</script>

<template>
  <div v-if="!posts.length">empty</div>
  <div v-else>
    <TransitionGroup name="list">
      <Post v-for="post of posts" :post="post" :key="post.id" />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
