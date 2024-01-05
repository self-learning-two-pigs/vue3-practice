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
    <Post v-for="post of posts" :post="post" :key="post.id" />
  </div>
</template>
