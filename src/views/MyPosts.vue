<script setup>
import { usePosts } from '@/stores/posts';
import PostList from '@/components/post/PostList.vue';

const { myPosts } = usePosts();
</script>
<template>
  <PostList :posts="myPosts" />
</template>
