<template>
  <div class="container">
    <globalHeader :user="currentUser"></globalHeader>
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validateInput :rules="emailRules"></validateInput>
      </div>
    </form>
    <columnList :list="list"></columnList>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import validateInput, {RulesProp} from "@/components/validateInput.vue";
import columnList, {ColumnProps} from "@/components/columnList.vue";
import globalHeader, {UserProps} from "@/components/globalHeader.vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '专栏',
    description: '可以可以可以可以',
    avatar: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png'
  }, {
    id: 2,
    title: '专栏2',
    description: '可以可以可以可以',
    // avatar: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png'
  }, {
    id: 3,
    title: '专栏3',
    description: '可以可以可以可以',
    avatar: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png'
  }
]
const currentUser: UserProps = {
  isLogin: true,
  name: 'luck',
  id: 1
}
export default defineComponent({
  name: "App",
  components: {
    columnList, globalHeader, validateInput
  },
  setup() {
    const emailRules: RulesProp = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱'}
    ]
    return {
      list: testData,
      currentUser,
      emailRules
    }
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
