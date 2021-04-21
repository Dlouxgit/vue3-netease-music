<template>
  <div class="title">
    <p class="title__content">
      <slot></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  padding: 12px 0;
  @include e(content) {
    font-size: $--title--font--size;
    color: $--font--color-white;
  }
}
</style>
