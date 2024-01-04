<script setup>
import { usePosts } from '@/stores/posts';
import PostList from '@/components/PostList.vue';

const { posts } = usePosts();
</script>
<template>
  <PostList :posts="posts" />
</template>
