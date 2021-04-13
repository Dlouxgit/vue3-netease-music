<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Layout from '@/layout/index.vue'

export default defineComponent({
  components: {
    Layout,
  },
})
</script>

<style lang="scss">
#app {
  color: $--font--color;
  font-size: $--font--size;
  height: 100%;
  background: $--body--color;
}
</style>
