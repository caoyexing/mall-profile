<template>
  <div class="detail">
    <!-- 导航 -->
    <detail-nav></detail-nav>
    <!-- 轮播图 -->
    <swiper :bannersList= 'bannersList'></swiper>
    
  </div>
</template>

<script>
import DetailNav from './childComps/detailNav.vue'
import Swiper from './childComps/detailSwiper.vue'

import {getDetailDataById} from '@/network/detail.js'
export default {
  components:{
    DetailNav,
    Swiper,
  },
  data(){
    return {
      goodsId:null,
      bannersList:[]
    }
  },
  created(){
    this.goodsId = this.$route.params.iid 
    this.getDetailData(this.goodsId)
  },
  methods:{
    // detail页面信息
    getDetailData(id){
      getDetailDataById(id).then((res)=>{
        console.log(res)
        this.bannersList = res.result.itemInfo.topImages
        console.log(this.bannersList)
      })
    }
  }

}
</script>

<style >

</style>