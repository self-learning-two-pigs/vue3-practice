import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { PostModel } from '@/components/post.model';
import { POSTS } from '@/stores/constants';

export const usePosts = defineStore('posts', () => {
  const posts = ref<PostModel[]>(POSTS);
  const getById = (id: string) => posts.value.find((p) => p.id === id);

  const toggleCollected = (id: string, collected: boolean) => {
    const post = getById(id);
    if (post) {
      post.collected = collected;
    }
  };

  const init = (list: PostModel[]) => {
    posts.value = list;
  };

  return { posts, toggleCollected, init, getById };
});
