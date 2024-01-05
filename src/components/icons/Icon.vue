<script setup lang="ts">
import { IconMaps } from '@/components/icons/iconMaps';

interface IconProps {
  width?: number;
  theme?: 'primary';
  name: keyof typeof IconMaps;
}
withDefaults(defineProps<IconProps>(), {
  width: 20,
  theme: 'primary'
});
</script>

<template>
  <Component :class="theme" :is="IconMaps[name]" :width="width" />
</template>

<style scoped>
.primary {
  color: var(--dark-primary);
}

svg:hover {
  background: var(--primary);
  border-radius: 2px;
}
</style>
