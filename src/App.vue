<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import { useUserStore } from '@/stores/user'
import { useRequest } from 'alova'
import 'bootstrap/dist/css/bootstrap.min.css'
import { computed, watch } from 'vue'
import { getCommentsList } from './api/methods/comments'
import GlobalHeader from './components/GlobalHeader.vue'
import Loader from './components/Loader.vue'
import createMessage from './hooks/createMessage'
const globalStore = useGlobalStore()
const userStore = useUserStore()
useRequest(getCommentsList)
const error = computed(() => globalStore.error)

watch(
  () => error.value.status,
  () => {
    const { status, message } = error.value
    if (status && message) {
      createMessage(message, 'danger')
    }
  }
)
</script>
<template>
  <main class="container-fluid">
    <GlobalHeader :user="userStore.user" />
    <router-view />
    <Loader v-if="globalStore.isLoading"></Loader>
    <!-- <Message :message="'错误xiaoxi'" /> -->
  </main>
</template>
