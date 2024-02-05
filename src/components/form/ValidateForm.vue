<script setup lang="ts">
// import mitt from 'mitt'
import { onUnmounted } from 'vue'
// const emitter = mitt()
const emits = defineEmits(['submitForm'])

onUnmounted(() => {})

const fn = () => {}
const submitForm = () => {
  emits('submitForm')
}

defineExpose({})
</script>
<template>
  <form class="validate-form-container">
    <slot name="default" />
    <div
      class="submit-area"
      @click.prevent="submitForm"
    >
      <slot name="submit">
        <button
          type="submit"
          class="btn btn-primary"
        >
          提交
        </button>
      </slot>
    </div>
  </form>
</template>
