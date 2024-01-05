<script setup>
import { usePosts } from '@/stores/posts';
import PostList from '@/components/PostList.vue';
import { storeToRefs } from 'pinia';

const { collects } = storeToRefs(usePosts());
</script>
<template>
  <PostList :posts="collects" />
</template>
