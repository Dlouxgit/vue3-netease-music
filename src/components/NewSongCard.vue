<template>
  <div class="new-song-card">
    <div class="new-song-card__title is-center">
      <span>{{ order }}</span>
    </div>
    <div class="new-song-card__center">
      <img class="new-song-card__center-item" :src="img" />
    </div>
    <div class="new-song-card__content">
      <p class="new-song-card__name">{{ name }}</p>
      <p class="new-song-card__singer">{{ artistsText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

const props = {
  order: {
    type: String as PropType<string>,
    default: '',
  },
  name: {
    type: String as PropType<string>,
    default: '',
  },
  img: {
    type: String as PropType<string>,
    default: '',
  },
  artists: {
    type: Array as PropType<any[]>,
    default() {
      return []
    },
  },
}

export default defineComponent({
  name: 'NewSongCard',
  props,
  setup(props) {
    const artistsText = computed(() => {
      return (props.artists || []).map(({ name }) => name).join('/')
    })

    return {
      artistsText,
    }
  },
})
</script>

<style lang="scss" scoped>
.new-song-card {
  display: flex;
  padding: 8px;
  font-size: $--font--size-sm;

  @include e(title) {
    width: 30px;
    margin-right: 8px;
  }

  @include e(center) {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }

  @include e(center-item) {
    width: 100%;
    height: 100%;
  }

  @include e(content) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @include e(name) {
    color: $--font--color-white;
  }
}
</style>
