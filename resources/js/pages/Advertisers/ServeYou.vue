<template>
  <div class="parent">
    <img
      class="dotted-grid dotted-2"
      :src="require('../../../assets/images/dotted-grid.png').default"
      alt=""
    />
    <div class="image-div">
      <img
        :src="
          require('../../../assets/images/advertisers-mockup-5.png').default
        "
        alt=""
      />
    </div>

    <div class="serve-text text-1">
      <img
        :src="require('../../../assets/images/serve-text-1.png').default"
        alt=""
      />
    </div>
    <div class="serve-text text-2">
      <img
        :src="require('../../../assets/images/serve-text-2.png').default"
        alt=""
      />
    </div>
    <div class="serve-text text-3">
      <img
        :src="require('../../../assets/images/serve-text-3.png').default"
        alt=""
      />
    </div>
    <div class="serve-text text-4">
      <img
        :src="require('../../../assets/images/serve-text-4.png').default"
        alt=""
      />
    </div>
    <div class="serve-text text-5">
      <img
        :src="require('../../../assets/images/serve-text-5.png').default"
        alt=""
      />
    </div>
    <div class="serve-text text-6">
      <img
        :src="require('../../../assets/images/serve-text-6.png').default"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { ScrollTrigger } from "../../../../public/js/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ServeYou",
  mounted() {
    // this.triggerAnimations();
  },
  methods: {
    triggerAnimations() {
      ScrollReveal().reveal('.serve-text', {
        delay: 300,
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        interval: 600
        // reset: true 
    });


      // gsap.to(".text-1", {
      //   autoAlpha: 1,
      //   duration: 500,
      //   scrollTrigger: {
      //     trigger: ".text-1",
      //     start: "top 700px",
      //     end: "bottom 500px",
      //     scrub: true,
      //     //   markers: true,
      //   },
      // });

      // gsap.to(".text-2", {
      //   autoAlpha: 1,
      //   // duration: 700,
      //   scrollTrigger: {
      //     trigger: ".text-1",
      //     // start: "bottom 800px",
      //     // end: "bottom 700px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".text-3", {
      //   autoAlpha: 1,
      //   // duration: 700,
      //   scrollTrigger: {
      //     trigger: ".text-2",
      //     // start: "bottom 800px",
      //     // end: "bottom 700px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".text-4", {
      //   autoAlpha: 1,
      //   // duration: 700,
      //   scrollTrigger: {
      //     trigger: ".text-4",
      //     start: "top 400px",
      //     end: "bottom 300px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".text-5", {
      //   autoAlpha: 1,
      //   // duration: 700,
      //   scrollTrigger: {
      //     trigger: ".text-4",
      //     start: "top 300px",
      //     end: "bottom 100px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".text-6", {
      //   autoAlpha: 1,
      //   // duration: 100,
      //   scrollTrigger: {
      //     trigger: ".text-5",
      //     start: "top 200px",
      //     end: "bottom 200px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  background: #ecf4f6;
  display: grid;
  place-items: center;
  position: relative;
  padding: 4rem 0;
  /* border: 1px solid black; */

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    /* bottom: 2rem; */
    top: -2.8rem;
    right: 17%;
    width: 2.5rem;
    /* visibility: hidden; */
    /* border: 1px solid red; */
  }

  .image-div {
    width: 30%;
    /* margin: auto ; */
    /* border: 1px solid red; */

    img {
      width: 100%;
    }
  }

  .serve-text {
    position: absolute;
    top: 0%;
    height: 30px;
    /* visibility: hidden; */
    /* left: 50%; */

    img {
      width: 70%;
    }
  }

  .text-1 {
    top: 17%;
    left: 61%;
    transform: translate(-17%, -61%);
  }

  .text-2 {
    top: 51%;
    left: 74%;
    transform: translate(-51%, -74%);
  }

  .text-3 {
    top: 84%;
    left: 72%;
    transform: translate(-72%, -84%);
  }

  .text-4 {
    top: 84%;
    left: 35%;
    transform: translate(-35%, -84%);
  }

  .text-5 {
    top: 49%;
    left: 30%;
    transform: translate(-49%, -30%);
  }

  .text-6 {
    top: 17%;
    left: 34%;
    transform: translate(-17%, -34%);
  }
}

@media (max-width: 480px) {
  section {
    height: 100%;
  }

  .image-div {
    width: 100%;
    margin: auto;
    padding: 4rem 1rem;

    img {
      width: 100%;
    }
  }
}
</style>