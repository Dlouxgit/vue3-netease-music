<template>
  <div>
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, PropType, watch } from 'vue'

const props = {
  source: {
    type: Array as PropType<any[]>,
    default() {
      return []
    },
  },
} as const

export default defineComponent({
  props,
  setup(props, { slots }) {
    function mixinStriped() {
      if (slots.default && slots.default.length) {
        nextTick(() => {
          // slots.default.forEach((vnode, index) => {
          //   const { elm } = vnode
          //   const cls = index % 2 === 0 ? 'is-deep' : 'is-shallow'
          //   elm.classList.add(cls)
          // })
        })
      }
    }

    onMounted(() => {
      mixinStriped()
    })
    watch(props.source, () => {
      mixinStriped()
    })
    return {}
  },
})
</script>

<style lang="scss" scoped>
@include when(deep) {
  background: #16181c;
}
@include when(shallow) {
  background: #1a1c20;
}
</style>
