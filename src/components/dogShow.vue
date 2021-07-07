<template>
  <img :src="result && result.message" alt="">
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  name: "dogShow",
  async setup() {
    const rewData = await axios.get('https://dog.ceo/api/breeds/image/random')
    return {
      result: rewData.data
    }
  }
})
</script>

<style scoped>

</style>