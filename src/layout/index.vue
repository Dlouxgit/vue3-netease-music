<template>
  <div class="layout">
    <LayoutHeader />
    <div class="layout__body">
      <LayoutMenu />
      <div class="layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import LayoutHeader from './header'
import LayoutMenu from './menu'

export default defineComponent({
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutMenu,
  },
})
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  @include e(body) {
    display: flex;
    height: calc(100% - #{$--header--height});
  }
  @include e(content) {
    flex: 1;
  }
  // .layout__body {
  //   .layout__content {
  //   }
  // }
}
</style>
