<template>
  <div ref="wrapper">
    <div class='content'>
      <slot></slot>
    </div >
  </div>
</template>

<script>

import BS from "better-scroll";

export default {
  name: "BetterScroll",
  props:['probeType','pullUpLoad'],
  data(){
    return {
      // 为了后面可以直接拿到 scroll 对象 监听scroll 的滚动事件
      scroll:null
    }
  },
  //
  mounted(){
    this.initBS()
  },
  methods: {
    // 初始化 bs
    initBS () {
      // this.$nextTick(()=>{
        this.scroll= new BS(this.$refs.wrapper,{
          // 插件更新之后  不用在refresh了 直接是obserDom 就行了
          observeDOM:true,
          observeImage:true,
          // 点击事件
          click:true,
          // 监听实时滚动 有的不用不用监听滚动 为了性能 0 1 2 3 
          probeType:this.probeType,
          // 上拉加载
          pullUpLoad:this.pullUpLoad
        })
      // })
      // 滚动事件
      this.scroll.on('scroll',(pos)=>{
        this.$emit('backScoll',pos)
      })
       //上拉加载 

       if(this.pullUpLoad){
         this.scroll.on('pullingUp',()=>{
           this.$emit('pullingUp')
         })
       }

    },
  },
  
};
</script>

<style scoped>

</style>