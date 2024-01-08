<script setup lang="ts">
import { useSlots } from 'vue';

interface ModalProps {
  open: boolean;
}
defineProps<ModalProps>();

const slots = useSlots();
</script>

<template>
  <div class="modal-container" v-if="open">
    <div class="modal-header" v-if="slots.header">
      <slot name="header"></slot>
    </div>
    <div class="modal-body" v-if="slots.body">
      <slot name="body"></slot>
    </div>
    <div class="modal-footer" v-if="slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  position: absolute;
  margin-top: 60px;
  right: 0;
  top: 0;
}
</style>
