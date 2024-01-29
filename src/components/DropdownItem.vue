<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <li
    class="dropdown-option"
    :class="{ 'is-disabled': disabled }"
  >
    <slot />
  </li>
</template>
<style>
/* TODO 覆盖样式 */
.dropdown-option.is-disabled * {
  color: #b4b8bb;
  pointer-events: none;
  background-color: transparent;
}
</style>
