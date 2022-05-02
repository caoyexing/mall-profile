<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in bannersList"
        :key="index"
      >
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="swiper-pagination" ></div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
export default {
  props: ["bannersList"],
  methods: {
    init() {
      let swiper = new Swiper(".swiper", {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
  },
  watch: {
    bannersList() {
      this.$nextTick(() => {
        this.init();
      });
    },
  },
};
</script>

<style scoped>
.swiper-wrapper {
  height: 300px;
  width: 100%;
}

</style>