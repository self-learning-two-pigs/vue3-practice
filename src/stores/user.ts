import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { User } from '@/model/user';

export const useUser = defineStore('user', () => {
  const user = ref<User>();

  const setUser = (value: User) => (user.value = value);

  const isLogin = computed(() => !!user.value);

  return { user, setUser, isLogin };
});
