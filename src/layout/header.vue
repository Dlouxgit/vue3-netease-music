<template>
  <div class="header"></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.header {
  height: $--header--height;
  background: $--header--color;
}
</style>
