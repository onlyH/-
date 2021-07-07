<template>
  <li class="dropdown-option" :class="{'is-disabled':disabled}">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "dropdownItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
.is-disabled {
  color: #cccccc;
  pointer-events: none;
  background-color: #cccccc;
}
</style>