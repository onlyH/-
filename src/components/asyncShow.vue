<template>
  <h1>{{ result }}</h1>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "asyncShow",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          result: 'asyncShow 组件'
        })
      }, 3000)
    })
  }
})
</script>

<style scoped>

</style>