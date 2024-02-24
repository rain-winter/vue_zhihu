<script setup lang="ts">
import type { CheckFunction, UploadStatus } from '@/types/common';
import { ref, useAttrs, type PropType } from 'vue';

defineOptions({
  name: 'UploaderComponent',
  inheritAttrs: false
})
const props = defineProps({
  action: {
    type: String,
    require: true
  },
  beforeUpload: {
    type: Function as PropType<CheckFunction>
  }
})
const attrs = useAttrs()
const emits = defineEmits(['file-upload', 'file-uploaded-error'])

const fileInputRef = ref<null | HTMLInputElement>(null)
const fileStatus = ref<UploadStatus>('ready')
const handleUpload = () => {
  if (!fileInputRef.value) return
  fileInputRef.value.click()
}
const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files) return
  fileStatus.value = 'loading'
  const files = Array.from(target.files)
  if (props.beforeUpload) {
    const result = props.beforeUpload(files[0])
    if (!result) {
      return
    }
  }
  const formData = new FormData()
  formData.append('file', files[0])

  // axios.post('url',formData, {
  //   headers: {
  //     'Content-type': 'multipart/form-data'
  //   }
  // })
  // 上传成功 触发成功回调
  // emits('file-upload', true)
}
</script>
<template>
  <div class="file-upload">
    <div
      class="file-upload-container"
      @click="handleUpload"
      v-bind="attrs"
    >
      <slot
        v-if="fileStatus === 'loading'"
        name="loading"
      >
        <button
          class="btn btn-primary"
          disabled
        >
          正在上传……
        </button>
      </slot>
      <slot
        v-else-if="fileStatus === 'success'"
        name="uploaded"
      >
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot
        v-else
        name="default"
      >
        <button class="btn btn-primary">点击上传</button>
      </slot>
      <input
        type="file"
        class="file-input d-none"
        ref="fileInputRef"
        @change="handleFileChange"
      />
    </div>
  </div>
</template>
