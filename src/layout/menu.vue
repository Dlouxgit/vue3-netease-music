<template>
  <div class="menu">
    <user />
    <ul class="menu__list">
      <router-link
        v-for="item in menusList"
        :key="item.title"
        :to="item.to"
        class="menu__item"
        active-class="menu__item--active"
        tag="li"
      >
        <i class="iconfont" :class="item.icon" />
        <span class="menu__title">{{ item.title }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import User from '@/components/user'

export default defineComponent({
  components: {
    User,
  },
  setup() {
    const state = reactive({
      menusList: [
        {
          title: '发现音乐',
          icon: 'icon-yinyue',
          to: '/discovery',
        },
        {
          title: '私人FM',
          to: '/fm',
        },
      ],
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.menu {
  width: 300px;
  height: 100%;
  background-color: $--menu--color;

  @include e(item) {
    padding: 12px 18px;
    cursor: pointer;
    display: inline-block;

    &:hover {
      background-color: $--menu_item--color-active;
    }

    @include m(active) {
      color: $--theme--color;
      background: $--menu_item--color-active;
    }
  }

  @include e(title) {
    display: inline-block;
    margin-left: 8px;
  }
}
</style>
