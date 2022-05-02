<template>
   <nav-bar>
     <div class="left_icon"  slot="left" @click="goback">
       <span>
         &lt;
       </span>
     </div>
     <div slot="center" class="detail_center">
       <div 
        class="detail_item" 
        v-for="(item,index) in titles" 
        :key="index" :class="{active:currentIndex===index}"
        @click="tabChange(index)"
       >
         {{item}}
       </div>
     </div>
   </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    goback(){
      this.$router.back()
    },
     tabChange(index){
    this.currentIndex = index

  }
  },
 

}
</script>

<style scoped>

.left_icon span{
  font-size: 30px;
   
}
.detail_center{
  display: flex;
  font-size: 14px;
}
.detail_item{
  flex: 1;
}
.active{
  color: #f66;
}
</style>