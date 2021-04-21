<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <div class="recommend__list">
      <PlayListCard
        v-for="item in list"
        :key="item.id"
        :name="item.name"
        :img="item.picUrl"
        :desc="item.copywriter"
      />
    </div>
  </div>
</template>

<script>
import Title from '@/base/Title'
import PlayListCard from '@/components/PlayListCard'
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { getPersonalizedSongs } from '@/api/personalized'

export default defineComponent({
  components: {
    Title,
    PlayListCard,
  },
  setup() {
    const state = reactive({
      list: [],
    })

    onMounted(async () => {
      const { result } = await getPersonalizedSongs()
      state.list = result
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.recommend {
  @include e(list) {
    margin: 0 -4px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
