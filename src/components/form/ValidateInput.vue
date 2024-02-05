<script setup lang="ts">
import type { RulesProp } from '@/types/common'
import mitt from 'mitt'
import { onMounted, reactive, useAttrs, type PropType } from 'vue'
const emitter = mitt()

const attrs = useAttrs()

defineOptions({
  name: 'ValidateInput',
  inheritAttrs: false
})

const props = defineProps({
  rules: {
    type: Array as PropType<RulesProp>
  }
})

onMounted(() => {
  emitter.emit('on-input-mounted', () => console.log(123))
})

const emailVal = defineModel('emailVal', { type: String, default: '' })

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const inputRef = reactive({
  error: false,
  message: ''
})

const validateInput = () => {
  if (!props.rules) return true
  const allPassed = props.rules.every((rule) => {
    let passed = true
    inputRef.message = rule.message
    switch (rule.type) {
      case 'required':
        passed = emailVal.value.trim() !== ''
        break
      case 'email':
        passed = emailReg.test(emailVal.value)
        break
      default:
        break
    }
    return passed
  })
  inputRef.error = !allPassed
  return allPassed
}

defineExpose({
  validateInput
})
</script>

<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{
        'is-invalid': inputRef.error
      }"
      @blur="validateInput"
      v-model="emailVal"
      v-bind="attrs"
    />
    <span
      v-if="inputRef.error"
      class="invalid-feedback"
    >
      {{ inputRef.message }}
    </span>
  </div>
</template>
