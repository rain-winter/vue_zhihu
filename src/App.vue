<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import ValidateInput from './components/ValidateInput.vue'
import type { RulesProp } from './type'

const emailRules: RulesProp = [
  {
    type: 'required',
    message: '邮箱地址不能为空'
  },
  {
    type: 'email',
    message: '请输入正确的邮箱地址'
  }
]
</script>
<template>
  <main class="container">
    <GlobalHeader :user="{ isLogin: true }" />
    <ValidateInput :rules="emailRules" />
  </main>
</template>
