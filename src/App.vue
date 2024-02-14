<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import { useUserStore } from '@/stores/user'
import { useRequest } from 'alova'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getCommentsList } from './api/methods/comments'
import GlobalHeader from './components/GlobalHeader.vue'
import Loader from './components/Loader.vue'
const globalStore = useGlobalStore()
const userStore = useUserStore()
useRequest(getCommentsList)
</script>
<template>
  <main class="container">
    <GlobalHeader :user="userStore.user" />
    <router-view />
    <Loader v-if="globalStore.isLoading"></Loader>
  </main>
</template>
