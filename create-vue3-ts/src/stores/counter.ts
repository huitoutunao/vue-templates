import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value += 1
  }

  return { count, doubleCount, increment }
})

export const useHelloWorld = defineStore('sayHi', () => {
  const msg = ref('hello world')
  return { msg }
})