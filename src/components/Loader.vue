<template>
  <teleport to="#back">
    <div
      class="d-flex justify-content-center align-items-center h-100 w-100 loading-container"
      :style="{ backgroundColor: background || '' }"
    >
      <div class="loading-content">
        <div
          class="spinner-border text-primary"
          role="status"
        >
          <span class="visually-hidden">{{ text || 'loading' }}</span>
        </div>
        <p
          v-if="text"
          class="text-primary small"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
defineOptions({
  name: 'LoaderComponent'
})
defineProps({
  text: String,
  background: String
})
const node = document.createElement('div')
node.id = 'back'
document.body.appendChild(node)
onUnmounted(() => {
  document.body.removeChild(node)
})
</script>

<style>
.loading-container {
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
