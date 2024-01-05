<script setup>
import { usePosts } from '@/stores/posts';
import PostList from '@/components/post/PostList.vue';
import { storeToRefs } from 'pinia';

const { collects } = storeToRefs(usePosts());
</script>
<template>
  <PostList :posts="collects" />
</template>
