<script setup>
import { usePosts } from '@/stores/posts';
import PostList from '@/components/PostList.vue';

const { collects } = usePosts();
</script>
<template>
  <PostList :posts="collects" />
</template>
