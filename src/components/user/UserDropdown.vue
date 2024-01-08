<script setup lang="ts">
import { useUser } from '@/stores/user';
import { useRouter } from 'vue-router';
import Modal from '@/components/Modal.vue';

interface UserDropdownProps {
  open: boolean;
}
defineProps<UserDropdownProps>();

const { setUser } = useUser();
const router = useRouter();
const logout = () => {
  setUser(undefined);
  router.push('/login');
};

const goToMyProfile = () => {
  router.push('/profile');
};
</script>

<template>
  <teleport to="body">
    <Modal :open="open">
      <template #body>
        <ul>
          <li @click="goToMyProfile">我的</li>
          <li @click="logout">登出</li>
        </ul>
      </template>
    </Modal>
  </teleport>
</template>

<style scoped>
ul {
  border: 1px solid var(--dark-primary);
  margin: 0;
  padding: 0;
  width: 100px;
  background: var(--white);
  list-style: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

li {
  padding: 4px 8px;

  &:hover {
    background: var(--primary);
  }
}
</style>
