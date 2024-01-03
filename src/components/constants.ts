import type { PostModel } from '@/components/post.model';

export const POSTS: PostModel[] = [
  {
    id: 'postId1',
    title: 'vue入门',
    content: '参考官网',
    img: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/05/23202533/sakura.jpg',
    createdAt: '2023-01-03T08:08:45.012Z',
    createdByUserId: 'userId1',
    createdByUserName: 'Amy'
  },
  {
    id: 'postId2',
    title: 'vue进阶',
    content: '参考官网',
    createdAt: '2023-05-03T08:08:45.012Z',
    createdByUserId: 'userId2',
    createdByUserName: 'May',
    img: 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/05/23202815/lotus.jpg'
  },
  {
    id: 'postId3',
    title: 'vue router怎么使用',
    content: '参考官网',
    createdAt: '2023-05-03T08:08:45.012Z',
    createdByUserId: 'userId1',
    createdByUserName: 'Amy',
    img: 'https://wallpapers.com/images/hd/flower-pictures-sxxwanix5l9ty292.jpg'
  }
];
