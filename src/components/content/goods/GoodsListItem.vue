<template>
  <div class="goods-list-item" v-if="goodsItem"  @click="goodsItemId" >
    <!-- 图片 -->
    <div class="img">
      <img :src="goodsItem.show.img" alt="">
    </div>
    <!-- 标题 -->
    <div class="title">
      <span >{{goodsItem.title}}</span>
      <div class="price">
        <span>{{goodsItem.price}}</span>
        <span>❤</span>
        <span>{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:['goodsItem'],
  methods:{
    goodsItemId(){
      // 路径要有 /
      this.$router.push(`/detail/${this.goodsItem.iid}`)
    }
  }
}
</script>

<style scoped>
.goods-list-item{
  width: 48%;
  padding: 2px;
  font-size: 14px;
  position: relative;
  text-align: center;
  padding-bottom: 40px;
}
.goods-list-item img{
  width: 100%;
}
.title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title{
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
}
.price span{
  margin: 0 4px;
}
.price :first-child{
  color: #f66;
}
</style>