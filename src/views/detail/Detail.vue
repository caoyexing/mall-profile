<template>
  <div class="detail">
    <!-- 导航 -->
    <detail-nav></detail-nav>
    <!-- 轮播图 -->
    <swiper :bannersList= 'bannersList'></swiper>
    <detail-title-info ></detail-title-info>
  </div>
</template>

<script>
import DetailNav from './childComps/detailNav.vue'
import Swiper from './childComps/detailSwiper.vue'
import DetailTitleInfo from './childComps/detailTitleInfo.vue'

import {getDetailDataById} from '@/network/detail.js'
export default {
  components:{
    DetailNav,
    Swiper,
    DetailTitleInfo
  },
  data(){
    return {
      goodsId:null,
      bannersList:[]
    }
  },
  created(){
    this.goodsId = this.$route.params.iid 
    // this.getDetailData(this.goodsId)
  },
  methods:{
    // detail页面信息
    getDetailData(id){
      getDetailDataById(id).then((res)=>{
        console.log(res)
        // 1.轮播图
        this.bannersList = res.result.itemInfo.topImages
        // 2.标题信息


      })
    }
  }

}
</script>

<style >

</style>