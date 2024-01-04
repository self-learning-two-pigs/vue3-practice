<script setup lang="ts">
import Icon from '@/components/Icon.vue';

interface EmitsProps {
  (e: 'collect', value: boolean): void;
}
defineEmits<EmitsProps>();

interface PostActionProps {
  collected: boolean;
}
defineProps<PostActionProps>();
</script>

<template>
  <Icon class="icon" v-if="collected" name="unCollect" @click.stop="$emit('collect', false)" />
  <Icon class="icon" v-else name="collect" @click.stop="$emit('collect', true)" />
</template>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
