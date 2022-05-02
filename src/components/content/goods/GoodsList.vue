<template>
  <div class="good-list" v-if="goodsList">
    <!-- {{goodsList}} -->
    <goods-item v-for="(item,index) in goodsList" :key= 'index' :goodsItem = 'item'></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsListItem.vue'
export default {
  name:"GoodsList",
  components:{
    GoodsItem
  },
  // 传入的是 type的list
  props:['goodsList']

}
</script>

<style scoped>
.good-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 2px;
  position: relative;
}

</style>