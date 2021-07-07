<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increase">按钮</button>
    <h1>{{ double }}</h1>
    <ul>
      <li v-for="number in numbers" :key="number">
        {{ number }}
      </li>
    </ul>
    <h1>{{ person.name }}</h1>
    <h1>x坐标：{{ x }}，y坐标：{{ y }}</h1>
    <p>{{ error }}</p>
    <Suspense>
      <template #default>
        <div>
          <asyncShow></asyncShow>
          <dogShow></dogShow>
        </div>
      </template>
      <template #fallback>
        <h1>loading ------ </h1>
      </template>
    </Suspense>
    <button @click="updateGreeting">title</button>
    <button @click="openModel">open</button>
    <model :isOpen="modelIsOpen" @close-model="onModelClose">is model !!!</model>
    <br>
    <h1 v-if="loading">loading........</h1>
    <img v-if="loaded" :src="result.message" alt="">
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onUpdated,
  reactive,
  ref,
  toRefs,
  watch
} from "vue";
import updateMouseEvent from "@/hooks/useMouse";
import useUrlLoader from "@/hooks/useUrl";
import model from './model.vue'
import asyncShow from "@/components/asyncShow.vue";
import dogShow from "@/components/dogShow.vue";

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string }
}

interface DogPic {
  message: string;
  status: string
}

export default defineComponent({
  name: "hello-world",
  components: {model, asyncShow, dogShow},
  setup() {
    const error = ref()
    onErrorCaptured(e => {
      error.value = e
      return true
    })
    onUpdated(() => {
      // console.log('onUpdated')
    })
    onRenderTracked((e) => {
      // console.log(e)
    })
    onRenderTriggered((e) => {
      // console.log(e)
    })

    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // const increase = () => {
    //   count.value++
    // }
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++
      },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    data.numbers[0] = 5
    data.numbers[3] = 999
    data.person.name = 'shaun'
    const refData = toRefs(data)
    const greetings = ref("")
    const updateGreeting = () => {
      greetings.value += 'hello'
    }
    // watch([greetings, data], (n, o) => {
    //   document.title = 'updated' + greetings.value + data.count
    // })
    watch([greetings, () => data.count], (n, o) => {
      document.title = 'updated' + greetings.value + data.count
    })
    // 模块化妙用 --  鼠标追踪器
    const {x, y} = updateMouseEvent()
    const {result, loading, loaded} = useUrlLoader<DogPic>('https://dog.ceo/api/breeds/image/random')
    watch(result, () => {
      if (result.value) {
        console.log(result.value.message)
      }
    })
    const modelIsOpen = ref(false)
    const openModel = () => {
      modelIsOpen.value = true
    }
    const onModelClose = () => {
      console.log(3333)
      modelIsOpen.value = false
    }
    return {
      ...refData,
      updateGreeting,
      greetings,
      x,
      y,
      result,
      loading,
      loaded,
      modelIsOpen,
      openModel,
      onModelClose,
      error
    }
  },


});

</script>

<style>
</style>