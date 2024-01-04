import { POSTS } from '@/stores/constants';
import type { PostModel } from '@/components/post.model';

export const getAllPosts = async (): Promise<PostModel[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(POSTS);
    }, 1000);
  });
