<script setup lang="ts">
import ValidateForm from '@/components/form/ValidateForm.vue'
import ValidateInput from '@/components/form/ValidateInput.vue'
import type { RulesProp } from '@/types/common'
import { ref } from 'vue'

defineOptions({ name: 'LoginView' })

const inputRef = ref()
const emailVal = ref('')
const emailRules: RulesProp = [
  { type: 'required', message: '电子邮箱地址不能为空' },
  { type: 'email', message: '请输入正确的电子邮箱格式' }
]
const passwordVal = ref('')
const passwordRules: RulesProp = [{ type: 'required', message: '密码不能为空' }]

const onSubmitForm = () => {
  //   console.log(123)
  console.log(inputRef.value.validateInput())
}
</script>
<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到者也</h5>
    <ValidateForm @submit-form="onSubmitForm">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput
          placeholder="请输入邮箱地址"
          type="email"
          :rules="emailRules"
          v-model="emailVal"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          placeholder="请输入密码"
          type="text"
          :rules="passwordRules"
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <button
          type="submit"
          class="btn btn-primary btn-block btn-large"
        >
          登录
        </button>
      </template>
    </ValidateForm>
  </div>
</template>
