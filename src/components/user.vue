<template>
  <div class="user is-verticalCenter">
    <i class="user-icon iconfont icon-yonghu" />
    <p class="user-name">未登录</p>
  </div>
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
.user {
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 12px;
  @include when(verticalCenter) {
    display: flex;
    align-items: center;
  }

  .user-icon {
    font-size: 24px;
  }

  .user-name {
    margin-left: 8px;
    font-size: $--font--size-lg;
  }
}
</style>
