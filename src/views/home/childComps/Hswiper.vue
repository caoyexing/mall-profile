<template>
<!-- 默认容器是swiper -->
 <div class="swiper">
   <!-- 点击页面进行跳转 后端返回的link -->
    <div class="swiper-wrapper">
        <a  :href="item.link" class="swiper-slide" v-for="(item,index) in bannerList" :key='index'>
          <img alt='' :src='item.image'>
       </a>
    </div>
 </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
export default {
  props:['bannerList'],
  data(){
    return {
      imgTag :false,
    }
  },

  // 有了dom 挂载
  // mounted(){
  //   this.initSwiper()
  // },
  // methods:{
  //   // 初始化 swiper
  //   initSwiper(){
  //     var swiper = new Swiper('.swiper',{
  //        loop: true, 
  //     })
  //   }
  // }



  // watch: {
  //   bannerList() {
  //     this.$nextTick(() => {
  //       var swiper = new Swiper(".swiper", {
  //         loop: true,
  //         autoplay: {
  //           delay: 3000,
  //         },
  //       });
  //     });
  //   },
  // },
  // 
 watch:{
   bannerList(){
     this.$nextTick(()=>{
       var swiper = new Swiper('.swiper',{
         loop:true,
         autoplay:{
           delay:3000
         }
       })
     })
   }
 }


}
</script>

<style scoped>
img{
  height: 200px;
  width: 100%;
}

</style>