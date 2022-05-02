<template>
  <div class="tab-bar-item" @click="handleClick">
    <!-- 图片 -->
    <div class="icon">
      <slot name="item-icon" v-if="!isActive"></slot>
    </div>
    <!-- 高亮图片 -->
    <div class="active-icon">
      <slot name="item-active-icon" v-if="isActive"></slot>
    </div>
    <!-- 内容  -->
    <div class="text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 传入的地link 被点击的时候的地址
  props: {
    link: String,
    required: true,
  },

  computed: {
    // 高亮显示
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    //
    activeStyle() {
      return this.isActive ? { color: "red" } : {};
    },
  },
  methods: {
    // 点击进行跳转页面
    handleClick() {
      // console.log(this.isActive);
      this.$router.push(this.link);
    },
  },
};
</script>

<style scoped>
/* item 样式 */
.tab-bar-item {
  flex: 1;

  padding-top: 4px;
}
</style>