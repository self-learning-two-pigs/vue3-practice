import { POSTS } from '@/stores/constants';
import type { PostModel } from '@/model/post.model';

export const getAllPosts = async (): Promise<PostModel[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(POSTS);
    }, 1000);
  });
