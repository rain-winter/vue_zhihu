<script setup lang="ts">
import type { UserProps } from '@/types/user';
import type { PropType } from 'vue';
import DropDown from './DropDown.vue';
import DropdownItem from './DropdownItem.vue';

defineOptions({
  name: 'GlobalHeader'
})
defineProps({
  user: {
    type: Object as PropType<UserProps>,
    required: true
  }
})
</script>
<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link
      class="navbar-brand"
      to="/"
    >
      者也专栏
    </router-link>
    <ul
      v-if="!user.isLogin"
      class="list-inline mb-0"
    >
      <li class="list-inline-item">
        <router-link
          to="/login"
          class="btn btn-outline-light my-2"
        >
          登陆
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link
          to="/signup"
          class="btn btn-outline-light my-2"
        >
          注册
        </router-link>
      </li>
    </ul>
    <ul
      v-else
      class="list-inline mb-0"
    >
      <DropDown :title="user.nickName || '请登录'">
        <DropdownItem>
          <router-link
            to="/create"
            class="dropdown-item"
          >
            新建文章
          </router-link>
        </DropdownItem>
        <DropdownItem v-if="user.column">
          <router-link
            :to="`/column/${user.column }`"
            class="dropdown-item"
          >
            我的专栏
          </router-link>
        </DropdownItem>
        <DropdownItem disabled>
          <router-link
            to="/create"
            class="dropdown-item"
          >
            编辑资料
          </router-link>
        </DropdownItem>
        <DropdownItem>
          <router-link
            to="/create"
            class="dropdown-item"
          >
            退出登录
          </router-link>
        </DropdownItem>
      </DropDown>
    </ul>
  </nav>
</template>
@/types
