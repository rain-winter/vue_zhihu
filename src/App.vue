<script setup lang="ts">
import { getCommentsList } from '@/api/methods/comments'
import type { RulesProp } from '@/types/common'
import { useRequest } from 'alova'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import ValidateInput from './components/ValidateInput.vue'

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

const { onSuccess, data } = useRequest(getCommentsList())
onSuccess((res) => {
  console.log(res.data)
})
</script>
<template>
  <main class="container">
    <GlobalHeader :user="{ isLogin: true }" />
    <ValidateInput :rules="emailRules" />
    <div
      v-for="item in data"
      :key="item.id"
    >
      {{ item.text }}
    </div>
  </main>
</template>
./types
