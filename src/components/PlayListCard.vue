<template>
  <div class="play-list-card">
    <div class="play-list-card__img">
      <img class="play-list-card__img-item" :src="img" />
      <div class="play-list-card__desc-wrap">
        <span class="play-list-card__desc">{{ desc }}</span>
      </div>
      <i class="play-list-card__icon iconfont icon-bofang1" />
    </div>
    <p class="play-list-card__name">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const props = {
  name: {
    type: String as PropType<string>,
    default: '',
  },
  img: {
    type: String as PropType<string>,
    default: '',
  },
  desc: {
    type: String as PropType<string>,
    default() {
      return []
    },
  },
}

export default defineComponent({
  props,
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.play-list-card {
  $this: &;

  position: relative;
  width: calc(20% - 8px);
  margin: 4px;
  margin-bottom: 32px;
  cursor: pointer;

  @include e(img) {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 8px;
    overflow: hidden;
  }

  @include e(img-item) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  @include e(desc-wrap) {
    position: absolute;
    padding: 6px;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transform: translateY(-100%);
    transition: all 0.3s;
  }

  @include e(desc) {
    color: $--font--color-white;
    font-size: $--font--size-sm;
  }

  @include e(icon) {
    opacity: 0;
    position: absolute;
    right: 4px;
    bottom: 4px;
    font-size: 24px;
    transition: all 0.3s;
    color: $--font--color-white;
  }

  &:hover {
    #{$this}__desc-wrap {
      transform: translateY(0);
    }
    #{$this}__icon {
      opacity: 1;
    }
    // @include e(desc-wrap) {
    //   transform: translateY(0);
    // }

    // @include e(icon) {
    //   opacity: 1;
    // }
  }

  @include e(name) {
    font-size: $--font--size-sm;
    @include text-ellipsis();
  }
}
</style>
