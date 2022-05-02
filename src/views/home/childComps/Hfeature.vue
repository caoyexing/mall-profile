<template>
<!-- 特色 -->
  <div class="feature">
    <a href="">
      <img src="@/assets/img/home/recommend_bg.jpg" alt=""  @load="imgLoad">
    </a>
  </div>
</template>

<script>
export default {
  name:"Feature",
  methods:{
    // 图片最后加载完成之后  获取navcontrol的高度
    imgLoad(){
      this.$emit('imgLoad')
    }
  }

}
</script>

<style scoped>
img{
  width: 100%;
}

</style>