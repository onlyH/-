<template>
  <teleport to="#model">
    <div id="center" v-if="isOpen">
      <h2>
        <slot>this is a model</slot>
      </h2>
      <button @click="buttonClick">close</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "model",
  props: {
    isOpen: Boolean
  },

  setup(props, context) {
    const buttonClick = () => {
      context.emit('close-model')
    }
    return {
      buttonClick
    }
  }
})
</script>

<style scoped>
div {
  color: red;
  font-size: 20px;
  height: 200px;
  width: 200px;
  background: #fff;
  border: 2px solid #ccc;
  position: fixed;
  left: 50%;
  top: 30%;
}
</style>