import type { PostModel } from '@/model/post.model';
import type { User } from '@/model/user';

export const POSTS: PostModel[] = [
  {
    id: 'postId1',
    title: 'vue入门',
    content: '参考官网',
    img: 'https://img0.baidu.com/it/u=1538294622,2346929164&fm=253&fmt=auto?w=1422&h=800',
    collected: true,
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
    collected: false,
    img: 'https://img2.baidu.com/it/u=409925225,786542423&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
  },
  {
    id: 'postId3',
    title: 'vue router怎么使用',
    content: '参考官网',
    createdAt: '2023-05-03T08:08:45.012Z',
    createdByUserId: 'userId1',
    createdByUserName: 'Amy',
    collected: false,
    img: 'https://img.cc0.cn/pixabay/2019102223345863811.jpg%21860.jpg'
  }
];

export const USERS: User[] = [
  {
    id: 'userId1',
    name: 'Amy'
  },
  {
    id: 'userId2',
    name: 'May'
  }
];
