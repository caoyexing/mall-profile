<template>
  <div class="tab-bar">
    <!-- 插槽 每个item  -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
 
}
</script>

<style scoped>

.tab-bar{
  /* 本身的样式 */
  background-color: #f6f6f6f6;
  height: 49px;
  border-top: 1px solid rgba(150, 150, 150, .08);

  /* 定位 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  /* flex布局 */
  display: flex;
  text-align: center;
}

</style>