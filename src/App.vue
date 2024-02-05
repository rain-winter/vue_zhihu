<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
</script>
<template>
  <main class="container">
    <GlobalHeader :user="{ isLogin: true }" />
    <router-view />
  </main>
</template>
