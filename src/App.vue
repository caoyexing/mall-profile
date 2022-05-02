<template>
  <div id="app">
   <router-view></router-view>
   <!-- 详情页面不显示 tabbar -->
   <main-tab v-show="this.$route.name !=='detail'"></main-tab>
  </div>
</template>

<script>
import MainTab from '@/components/content/mainTab/mainTab.vue'
export default {
  components:{
    MainTab
  }
}
</script>

<style>
/*重置样式   样式前面要加~  */
@import '~@/assets/css/base.css';

</style>
