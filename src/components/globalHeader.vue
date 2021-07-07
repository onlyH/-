<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 p-2">
    <a href="#" class="navbar-brand">知乎专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item ">
        <a href="#" class="btn btn-outline-light ">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好${user.name}`">
          <dropdownItem>
            <a href="#" class="dropdown-item">新建文章</a>
          </dropdownItem>
            <dropdownItem disabled>
            <a href="#" class="dropdown-item" disabled>编辑资料</a>
            </dropdownItem>
              <dropdownItem>
            <a href="#" class="dropdown-item">退出登录</a>
          </dropdownItem>
        </dropdown>
        <!--        <a href="#" class="btn btn-outline-light">你好 {{ user.name }}</a>-->
      </li>
    </ul>

  </nav>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import dropdown from "@/components/dropdown.vue";
import dropdownItem from "@/components/dropdownItem.vue";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number
}

export default defineComponent({
  name: "globalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true
    }
  },
  components: {dropdown, dropdownItem}
})
</script>

<style scoped>

</style>