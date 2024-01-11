import { describe, test, vi, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Post from '@/components/post/Post.vue';
import type { PostModel } from '@/model/post.model';
import { createTestingPinia } from '@pinia/testing';
import { usePosts } from '@/stores/posts';

const mockPush = vi.fn();
vi.mock('vue-router', () => ({ useRouter: () => ({ push: mockPush }) }));

const POST: PostModel = {
  id: 'postId1',
  title: 'vue入门',
  content: '参考官网',
  img: 'https://img0.baidu.com/it/u=1538294622,2346929164&fm=253&fmt=auto?w=1422&h=800',
  collected: true,
  createdAt: '2023-01-03T08:08:45.012Z',
  createdByUserId: 'userId1',
  createdByUserName: 'Amy'
};

describe('Post', () => {
  test('basic render', async () => {
    const wrapper = mount(Post, {
      props: {
        post: POST
      },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn
            // stubActions: false
          })
        ]
      }
    });

    expect(wrapper.find('.title').text()).toEqual('vue入门');
    expect(wrapper.find('.name').text()).toEqual('Amy');
    expect(wrapper.find('.other .time').text()).toEqual('2023-01-03');
    expect(wrapper.find('svg')).toBeTruthy();

    await wrapper.find('.post').trigger('click');
    expect(mockPush).toHaveBeenCalled();

    await wrapper.find('svg').trigger('click');
    const postStore = usePosts();
    expect(postStore.toggleCollected).toHaveBeenCalledWith('postId1', false);
  });
});
