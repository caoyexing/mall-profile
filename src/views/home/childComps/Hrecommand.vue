<template>
  <div class="recommand" v-if="recommands" >
   <div  class='recommand-item' v-for="(item,index) in recommands" :key='index'>
    <a :href="item.link">
      <img :src="item.image" alt="" > 
      <div>{{item.title}}</div>
    </a>
   </div>
  </div>
</template>

<script>
export default {
  name:"recommand",
  props:['recommands'],
  data(){
    return {
      isLoad:false
    }
  },
  methods:{
    
  }

}
</script>

<style scoped>
.recommand{
  display: flex;
  /* 边距 */
  padding: 20px 0 30px 0 ;
  text-align: center;
  font-size: 14px;

  border-bottom: 10px solid #eee;
}
.recommand-item img{
  width: 80%;
  margin-bottom: 4px;
}




</style>