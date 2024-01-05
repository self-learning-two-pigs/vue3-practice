import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { PostModel } from '@/model/post.model';
import { POSTS } from '@/stores/constants';
import { useUser } from '@/stores/user';

export const usePosts = defineStore('posts', () => {
  const { user } = useUser();
  const posts = ref<PostModel[]>(POSTS);
  const getById = (id: string) => posts.value.find((p) => p.id === id);

  const toggleCollected = (id: string, collected: boolean) => {
    const post = getById(id);
    if (post) {
      post.collected = collected;
    }
  };

  const collects = computed(() => posts.value.filter((p) => p.collected));
  const myPosts = computed(() => posts.value.filter((p) => p.createdByUserId === user?.id));

  return { posts, toggleCollected, getById, collects, myPosts };
});
