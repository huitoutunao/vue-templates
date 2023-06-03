<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="sayWord">点我sayWord</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const word = ref('hello world')
    const sayWord = () => {
      console.log(word.value)
    }

    return {
      sayWord,
    }
  },
})
</script>
