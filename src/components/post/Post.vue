<script setup lang="ts">
import type { PostModel } from '@/model/post.model';
import { useRouter } from 'vue-router';
import PostAction from '@/components/post/PostAction.vue';
import { usePosts } from '@/stores/posts';
import { useDateFormat } from '@/hooks/useDateFormat';

interface PostProps {
  post: PostModel;
}
const { post } = defineProps<PostProps>();

const router = useRouter();
const goToPostDetailPage = (id: string) => {
  router.push(`/posts/${id}`);
};

const { toggleCollected } = usePosts();
const toggleCollect = (id: string, collect: boolean) => {
  toggleCollected(id, collect);
};

const time = useDateFormat(post.createdAt);
</script>
<template>
  <div class="post" @click="goToPostDetailPage(post.id)">
    <img :src="post.img" alt="post image" />
    <div class="content">
      <div class="other operation">
        <div class="title">{{ post.title }}</div>
        <PostAction :collected="post.collected" @collect="toggleCollect(post.id, $event)" />
      </div>
      <div class="other">
        <span class="name">{{ post.createdByUserName }}</span>
        <span class="time">{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  width: 300px;
  height: 300px;
  border: 1px solid var(--dark-primary);
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 16px;
  user-select: none;
}

.post + .post {
  margin-left: 16px;
}

img {
  height: 200px;
  flex: none;
}

.content {
  flex: auto;
  padding: 16px;
}

.title {
  font-weight: 700;
}

.operation {
  margin-bottom: 24px;
}

.other {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
