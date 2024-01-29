<script setup lang="ts">
import type { RulesProp } from '@/type'
import { reactive, type PropType } from 'vue'

defineOptions({
  name: 'ValidateInput'
})

const props = defineProps({
  rules: {
    type: Array as PropType<RulesProp>
  }
})

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const inputRef = reactive({
  value: '',
  error: false,
  message: ''
})

const validateEmail = () => {
  if (!props.rules) return
  const allPassed = props.rules.every((rule) => {
    let passed = true
    inputRef.message = rule.message
    switch (rule.type) {
      case 'required':
        passed = inputRef.value.trim() !== ''
        break
      case 'email':
        passed = emailReg.test(inputRef.value)
        break
      default:
        break
    }
    return passed
  })
  inputRef.error = !allPassed
}
</script>

<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{
        'is-invalid': inputRef.error
      }"
      @blur="validateEmail"
      v-model="inputRef.value"
    />
    <span
      v-if="inputRef.error"
      class="invalid-feedback"
    >
      {{ inputRef.message }}
    </span>
  </div>
</template>
