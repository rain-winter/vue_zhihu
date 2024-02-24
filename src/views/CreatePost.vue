<script setup lang="ts">
import { addPost } from '@/api/methods/posts'
import ValidateForm from '@/components/form/ValidateForm.vue'
import ValidateInput from '@/components/form/ValidateInput.vue'
import Uploader from '@/components/Uploader.vue'
import createMessage from '@/hooks/createMessage'
import { useUserStore } from '@/stores/user'
import type { PostProps } from '@/types/column'
import { beforeUploadCheck } from '@/utils/helper'
import { useRequest } from 'alova'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const title = ref()
const content = ref()

const onFormSubmit = (result: boolean) => {
  console.log(result)
  console.log(userStore.user.column)

  if (!result) return
  if (userStore.user.column) {
    const newPost: PostProps = {
      title: title.value,
      content: content.value,
      column: userStore.user.column
    }
    useRequest(addPost(newPost))
    router.push({
      name: 'column',
      params: {
        id: userStore.user.column
      }
    })
  }
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  console.log(e)
  const files = target.files
  if (!files) return
  const uploadFiles = files[0]
  const formData = new FormData()
  formData.append(uploadFiles.name, uploadFiles)
}
const beforeUpload = (file: File) => {
  const isJPG = file.type === 'image/jpg'
  if (!isJPG) {
    createMessage('文件只能是jpg', 'danger')
    return false
  }
  return true
}
const uploadCheck = (file: File) => {
  const result = beforeUploadCheck(file, {
    format: ['image/jpeg', 'image/png'],
    size: 1
  })
  const { passed, error } = result
  if (error === 'format') {
    // 上传图片必须是JPG
  }
  if (error === 'size') {
    // 上传图片必须小于1MB
  }
  return passed
}
</script>
<template>
  <div class="create-post-page">
    <h4 class="text-center">新建文章</h4>
    <Uploader
      action="/"
      :before-upload="uploadCheck"
      class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
    >
      <h2>点击上传头图</h2>

      <template #loading>
        <div class="d-flex">
          <div
            class="spinner-border text-secondary"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
          <h2>正在上传</h2>
        </div>
      </template>
      <template #uploaded="dataProps">
        <div class="uploaded-area">
          <img :src="dataProps.uploadedData.data.url" />
          <h3>点击重新上传</h3>
        </div>
      </template></Uploader
    >
    <ValidateForm @submit-form="onFormSubmit">
      <div>
        <label class="form-label"> 文章标题 </label>
        <ValidateInput
          placeholder="请输入文章标题"
          v-model="title"
        />
      </div>
      <div>
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          :tag="'textarea'"
          placeholder="请输入文章详情"
          v-model="content"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary">发表文章</button>
      </template>
    </ValidateForm>
  </div>
</template>

<style>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
