<template>
  <div>
    <div class="brand-carousel owl-carousel bg-color-white parent" style="padding: 2rem 0 0 0 ;">
      <div class="mb-0"><img :src="require('../../assets/images/brand-1.png').default" alt="" /></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-2.png').default" alt="" /></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-3.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-4.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-6.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-7.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-8.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-9.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-10.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-11.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-12.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-13.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-14.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-15.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-16.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-17.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-18.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-19.png').default" alt="" /></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-20.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-21.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-22.png').default" alt="" /></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-24.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-25.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-26.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-27.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-28.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-29.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-30.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-31.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-32.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-33.png').default" alt="" /></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-34.png').default" alt="" /></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-35.png').default" alt=""/></div>
      <div class="mb-0"><img :src="require('../../assets/images/brand-36.png').default" alt=""/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandsCarousel",
  mounted() {
    $(".brand-carousel").owlCarousel({
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplaySpeed: 6000,
      smartSpeed: 6000,
      slideTransition: "linear",
      responsive: {
        0: {
          items: 3,
          loop:true
        },
        600: {
          items: 4,
          loop:true
        },
        1000: {
          items: 7,
          loop:true
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 480px){
  .mb-0{
  img{
    width: 112%;
  }
}
}


</style>
