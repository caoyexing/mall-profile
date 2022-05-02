<template>
<!-- 头部导航 -->
  <div class="navbar">
    <!-- 左侧 -->
    <div class="nav-left">
      <slot name='left'></slot>
    </div>
    <!-- 中间 -->
    <div class="nav-center">
      <slot name='center'></slot>
    </div>
    <!-- 右侧 -->
    <div class="nav-right">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {


}
</script>

<style scoped>
 .navbar{
   position: relative;

   display: flex;

  height: 44px;
  line-height: 44px;
  text-align: center;
 }

.nav-left {
  width: 60px;
}
.nav-right{
  width: 60px;
}
.nav-center{
  flex: 1;
}
</style>