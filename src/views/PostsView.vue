<script setup>
import { onMounted, ref } from 'vue';
import Post from '@/components/Post.vue';
import { POSTS } from '@/components/constants.ts';

const posts = ref([]);
const isLoading = ref(false);

onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    posts.value = POSTS;
    isLoading.value = false;
  });
});
</script>
<template>
  <div v-if="isLoading">loading</div>
  <div v-else>
    <Post v-for="post of posts" :post="post" />
  </div>
</template>
