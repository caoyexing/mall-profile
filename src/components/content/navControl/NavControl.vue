<template>
  <div class="nav-control">
    <div class="control-item" 
      v-for="(item,index) in titles" 
      :key="index" 
      :class="{active:currentIndex === index}"
      @click="handle(index)"
    >
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavControl',
  props:['titles'],
  data(){
    return {
      currentIndex :0
    }
  },
  methods:{
    handle(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }

}
</script>

<style scoped>
.nav-control{
  height: 40px;
  padding-top: 10px;
  display: flex;
  justify-content:space-around ;
}
.control-item span{
  padding: 6px;
  /* 加padding margin不管用 */
  /* margin-bottom: 8px; */
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid  var(--color-high-text);
  margin-top: 4px;
}
</style>