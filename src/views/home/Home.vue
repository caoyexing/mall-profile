<template>
  <div class="home" >
    <!-- 头部 -->
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 定位的control -->
      <nav-control  
      class="nav-control" 
      :titles="['流行','新款','精选']"
       @tabClick='tabClick' 
       v-show="isFixed"
       ref="navRef1"
       ></nav-control>
    <!-- bs -->
    <better-scroll
      class="bs_center" 
      :probe-type='3' 
      @backScoll='backtop' 
      ref='scrollTop'
      :pull-up-load='true'
      @pullingUp='loadMore'
     >
      <!-- 轮播 -->
      <swiper :bannerList="bannerList" ></swiper>
      <!-- 推荐 -->
      <recommand :recommands="recommands" ></recommand>
      <!-- 特色 -->
      <feature @imgLoad='imgLoad'></feature>
      <!-- nav控制 -->
      <nav-control  :titles="['流行','新款','精选']" @tabClick='tabClick' ref= 'navRef2'></nav-control>
      <!-- 商品列表  传过去的是一个 type -->
      <goods  :goodsList  = 'showGoods'></goods>
    </better-scroll>
    <!-- 返回顶部 -->
    <back-top  @click.native="backtotop" v-show='isshow'></back-top>
  </div>
</template>

<script>
// 组件
import Swiper from "./childComps/Hswiper.vue";
import Recommand from "./childComps/Hrecommand.vue";
import Feature from "./childComps/Hfeature.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import NavControl from '@/components/content/navControl/NavControl.vue'
import Goods from '@/components/content/goods/GoodsList.vue'
import BackTop from '@/components/content/backtotop/BackTop.vue'

import BetterScroll from '@/components/content/bs/bs.vue'
// 请求
import { getData , getHomeGoodsList } from "@/network/home.js";

export default {
  components: {
    Swiper,
    Recommand,
    Feature,

    NavBar,
    NavControl,
    Goods,
    BetterScroll,
    BackTop,
    BackTop
  },
  data() {
    return {
      bannerList: {},
      recommands: {},
      // 数据结构 上拉加载 page  类型 type
      goodsList :{
        'pop':{ page:0, list :[]},
        'new':{page :0 ,list :[]},
        'sell':{page :0 , list :[]},
      },
      // 点击切换的 type
      currentType:'pop',
      isshow:false,
      navFixedTop : 0 ,
      isFixed:false,
      scrollY :0
    };
  },
  created() {
    this.getDataAll();
    // 初次加载 全部加载
    this.getGoodsList('pop')
    this.getGoodsList('sell')
    this.getGoodsList('new')
  },
  methods: {
    // img最后加载完成的图片 获取 navcontrol 高度
    imgLoad(){
      this.navFixedTop = this.$refs.navRef2.$el.offsetTop 
      console.log(this.navFixedTop)
    },
    /**
     * 上拉加载更多
    */
    loadMore(){
      // console.log('到底了')
      this.getGoodsList(this.currentType)
    },  
    /**
     * 返回顶部 组件的点击事件 native
    */  
    backtotop(){
      this.$refs.scrollTop.scroll.scrollTo(0,0,500)
    },
    /**
     * 返回顶部按钮的显示
    */
    backtop(pos){
      // console.log(pos)
      // 1. 点击回到顶部
      this.isshow = Math.abs(pos.y)  > 1000
      // 2.navcontrol固定定位 总是获取不到确切的位置 bug
      this.isFixed = Math.abs(pos.y) >this.navFixedTop
    },
   /**
    * 切换类型 type pop sell new
   */
  // tabcontrol 点击切换 type
  tabClick(index){
    // console.log(index)
    switch(index){
      case 0 :
        this.currentType = 'pop'
        break;
      case 1 :
        this.currentType = 'sell'
        break;
      case 2:
        this.currentType  = 'new'  
      break
    }
    this.$refs.navRef1.currentIndex = index
    this.$refs.navRef2.currentIndex = index
  },
  /* 
    网络有关的请求
  */
  //  商品列表数据 函数调用的时候 传入参数 
  getGoodsList(type){
    // 请求下一页的数据
    const page = this.goodsList[type].paeg + 1
    getHomeGoodsList(type,page).then((res)=>{
      // console.log(res.data)
      this.goodsList[type].list.push(...res.data.list)
      // 请求完数据 将页码进行赋值+1
      this.goodsList[type].page += 1
      // console.log(this.goodsList)
      // 每次触发 pullingUp 钩子后，你应该主动调用 finishPullUp() 告诉 BetterScroll 准备好下一次的 pullingUp 钩子
        this.$refs.scrollTop.scroll.finishPullUp()
    })
  },
  
  //  请求多个数据
    getDataAll() {
      getData().then((res) => {
        // console.log(res);
        this.bannerList = res.data.data.banner.list;
        // console.log(this.bannerList)
        this.recommands = res.data.data.recommend.list;
        // console.log(this.recommands);
      });
    },
  },
  computed:{
    showGoods(){
      return this.goodsList[this.currentType].list
    }
  },
  // 切换type的时候  回来的时候 保存位置信息 
  activated(){
    this.$refs.scrollTop.scroll.refresh()
    this.$refs.scrollTop.scroll.scrollTo(0,this.scrollY,10)
    // this.$refs.scrollTop.scroll.scrollTo(0,0,500)
    // 刷新一下还是会自动跑到做上面
  },
  deactivated(){
    // 记录离开时位置
    // scroll自带的属性 scroll.y 获取y的高度
    this.scrollY = this.$refs.scrollTop.scroll.y
    // console.log(this.scrollY)
  }
};
</script>

<style scoped>
.home{
  padding-bottom: 49px;
  /* height: 100vh; */
}
/* 头部样式 */
.navbar {
  background-color: var(--color-tint);
  font-size: 700;
  color: #fff;
  /* pc端兼容性不好 */
  position: sticky;
  top: 0;
  z-index: 9;
}
.nav-control{
  position: sticky;
  top: 40px;
  background-color: #fff;
  z-index: 9;
}

.bs_center{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>