<script setup lang="ts">
import { getUserInfo } from '@/api/methods/users'
import { useRequest } from 'alova'
import { useRoute } from 'vue-router'
import {generateFitUrl} from '@/utils/helper'

const route = useRoute()
const currentId = route.params.id
const { data: user } = useRequest(getUserInfo(currentId as string))
</script>
<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      v-if="user"
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
    >
      <div class="col-3 text-center">
        <img
          :src="generateFitUrl()"
          alt=""
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ user[0]?.nickName || '999' }}</h4>
        <p class="text-muted">{{ user[0]?.description }}</p>
      </div>
    </div>
    
  </div>
</template>
