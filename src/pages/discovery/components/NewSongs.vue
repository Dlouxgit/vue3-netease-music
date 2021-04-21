<template>
  <div class="new-songs">
    <Title>最新音乐</Title>
    <div class="new-songs__list">
      <div
        class="new-songs__item"
        :key="listIndex"
        v-for="(list, listIndex) in thunkedList"
      >
        <StripedList v-if="list.length" :source="list">
          <NewSongCard
            v-for="(item, index) in list"
            :order="getSongOrder(listIndex, index)"
            :key="item.id"
            :img="item.song.album.blurPicUrl"
            :name="item.name"
            :artists="item.song.artists"
          />
        </StripedList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'

import Title from '@/base/Title.vue'
import StripedList from '@/base/StripedList.vue'
import NewSongCard from '@/components/NewSongCard.vue'

import { getPersonalizedNewsong } from '@/api/personalized'

const limit = 10
export default defineComponent({
  components: { Title, StripedList, NewSongCard },
  setup() {
    let state = reactive({
      list: [],
      chunkLimit: Math.ceil(limit / 2),
    })
    const init = async function init() {
      const opt = {
        limit,
      }
      const { result } = await getPersonalizedNewsong(opt)
      state.list = result
    }
    init()

    const thunkedList = computed(() => {
      return [
        state.list.slice(0, state.chunkLimit),
        state.list.slice(state.chunkLimit, state.list.length),
      ]
    })

    const getSongOrder = (listIndex: number, index: number): number => {
      return listIndex * state.chunkLimit + index + 1
    }

    return {
      ...toRefs(state),
      thunkedList,
      getSongOrder,
    }
  },
})
</script>

<style lang="scss" scoped>
.new-songs {
  @include e(list) {
    display: flex;
  }
  @include e(item) {
    flex: 1;
  }
}
</style>
