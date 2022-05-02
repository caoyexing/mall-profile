<template>
  <div>
    <tab-bar>
      <!-- link 将路由地址传递过去 -->
      <tab-bar-item link='/home'>
      <!-- 插槽的 name -->
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img slot='item-active-icon' src="@/assets/img/tabbar/home_active.svg" alt="" />
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item link='/category'>
        <img slot="item-icon" src="~@/assets/img/tabbar/category.svg" alt="" />
        <img slot='item-active-icon' src="~@/assets/img/tabbar/category_active.svg" alt="" />
        <p slot="item-text">分类</p>
      </tab-bar-item>
     <tab-bar-item link='/cart'>
        <img slot="item-icon" src="~@/assets/img/tabbar/cart.svg" alt="" />
        <img slot='item-active-icon' src="~@/assets/img/tabbar/cart_active.svg" alt="" />
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <img slot="item-icon" src="~@/assets/img/tabbar/profile.svg" alt="" />
        <img slot='item-active-icon' src="~@/assets/img/tabbar/profile_active.svg" alt="" />
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";

export default {
  name: "main-tab",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
/* scoped  */
img{
  height: 20px;
  width: 20px;
  margin-bottom: 2px;
}

</style>>

