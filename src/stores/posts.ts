import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
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
    // posts.value = posts.value.map((p) =>
    //   p.id === id
    //     ? {
    //         ...p,
    //         collected
    //       }
    //     : p
    // );
  };

  const init = (list: PostModel[]) => {
    posts.value = list;
  };

  const collects = computed(() => posts.value.filter((p) => p.collected));
  const myPosts = computed(() => posts.value.filter((p) => p.createdByUserId === 'userId1'));

  return { posts, toggleCollected, init, getById, collects, myPosts };
});
