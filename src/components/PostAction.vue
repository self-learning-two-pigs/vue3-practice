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
  <Icon v-if="collected" name="collect" @click.stop="$emit('collect', false)" />
  <Icon v-else name="unCollect" @click.stop="$emit('collect', true)" />
</template>
