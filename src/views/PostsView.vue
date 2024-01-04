<script setup>
import Post from '@/components/Post.vue';
import { usePosts } from '@/stores/posts';

const { posts } = usePosts();
</script>
<template>
  <div v-if="!posts.length">empty</div>
  <div v-else>
    <Post v-for="post of posts" :post="post" :key="post.id" />
  </div>
</template>
