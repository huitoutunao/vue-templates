<template>
  <div class="about">
    <h1>This is an about page {{ msg }}</h1>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AboutView',
  setup() {
    const msg = ref('hello world')

    return {
      msg,
    }
  },
  mounted() {
    //
  },
})
</script>
