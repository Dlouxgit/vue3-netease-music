<template>
  <div class="page">发现音乐</div>
  <div class="discovery">
    <div class="discovery__content">
      <Recommend />
      <NewSongs />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import Recommend from './components/Recommend'
import NewSongs from './components/NewSongs'

export default defineComponent({
  components: {
    Recommend,
    NewSongs,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.discovery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 36px;
  @include e(content) {
    max-width: 1000px;
  }
}
</style>
