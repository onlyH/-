<template>
  <div class="validate-input-container pb-3">
    <input type="text" class="form-control" v-model="inputRef.val" @blur="validateInput"
           :class="{'is-invalid':inputRef.error}">
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive} from "vue";

const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
interface RuleProp {
  type: 'required' | 'email';
  message: string
}

export type RulesProp = RuleProp[]
export default defineComponent({
  name: "validateInput",
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup(props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = reg.test(inputRef.val)
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {inputRef, validateInput}
  }

})
</script>

<style scoped>

</style>