<script setup lang="ts">
import type { ValidateFunc } from '@/types/common'
import { emitter } from '@/utils'
import { onUnmounted } from 'vue'

const emits = defineEmits(['submitForm'])

onUnmounted(() => {
  emitter.off('form-item-created', callback)
  funcArr = []
})

const callback = (func?: ValidateFunc) => {
  if (func) funcArr.push(func)
}
emitter.on('form-item-created', callback)

let funcArr: ValidateFunc[] = []
const submitForm = () => {
  const result = funcArr.map((func) => func()).every((res) => res)
  emits('submitForm', result)
}
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
