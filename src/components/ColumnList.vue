<script setup lang="ts">
import type { ColumnProps } from '@/type/index'
import { onMounted, type PropType } from 'vue'

defineOptions({
  name: 'ColumnList'
})
const props = defineProps({
  msg: String,
  title: {
    type: String,
    default: '我是标题'
  },
  list: {
    type: Array as PropType<ColumnProps[]>,
    default: () => [],
    required: true
  }
})
onMounted(() => {
  console.log(props.list)
})
</script>
<template>
  <div class="row">
    <div
      v-for="item in list"
      :key="item.id"
      class="col-4 mb-4"
    >
      <div class="card">
        <div class="card-body text-center">
          <img
            :src="item.avatar"
            :alt="item.title"
          />
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">
            {{ item.description }}
          </p>
          <a
            href="#"
            class="btn btn-outline-primary"
          >
            进入专栏
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
