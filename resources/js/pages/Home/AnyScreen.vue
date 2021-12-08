<template>
  <section>
    <!-- Any Screen -->
    <img
      class="img-1"
      :src="require('../../../assets/images/screens-mockup-1.png').default"
      alt=""
    />
    <img
      class="img-2"
      :src="require('../../../assets/images/screens-mockup-2.png').default"
      alt=""
    />
    <img
      class="dotted-grid"
      :src="require('../../../assets/images/dotted-grid.png').default"
      alt=""
    />
    <div class="content">
      <h2>One Idea, Any Screen</h2>
      <p>
        MediaPal supports a wide range of <br />
        display and video formats for brands <br />
        to reach and influence customers and <br />
        prospects across any screen.
      </p>
    </div>
  </section>
</template>

<script>
import { ScrollTrigger } from "../../../../public/js/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AnyScreen",
  mounted() {
    gsap.to(".dotted-grid", {
      x: 100,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".dotted-grid",
        start: "top center",
        end: "top 300px",
        scrub: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  background: #ecf4f6;

  img {
    position: absolute;
  }

  .img-1 {
    /* border: 1px solid red; */
    width: 50%;
    top: 35%;
    right: 35%;
    z-index: 10;
  }
  .img-2 {
    /* border: 1px solid blue; */
    width: 40%;
    right: 10%;
    top: 0;
  }

  .dotted-grid {
    position: absolute;
    top: 20%;
    left: 6%;
    width: 3rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }

  .content {
    /* border: 1px solid black; */
    max-width: 24rem;
    position: absolute;
    top: 76%;

    /* bottom: 1rem; */
    right: 25%;

    h2 {
      font-size: 3rem;
      letter-spacing: 0.15rem;
      font-weight: 400;
      /* font-weight: 600 !important; */
      /* font-weight: 100; */
      /* border: 1px solid red; */
    }

    p {
      /* line-height: 1.2; */
      /* font-size: 1rem; */
      /* font-weight: 400; */
    }
  }
}

// min width 576px medium
// min width 767px
// min width 992px - large
// min width 1200px

/* @media screen and (min-width: 992px){

  section{
    position: relative;
  }

  .img-1{
    top: 31% !important;
right: 37% !important;
width: 55% !important;
transform: translate(0, 0);
  }

  .img-2{
    right: 4% !important;
    width: 50% !important;
    transform: translate(0,0);
  }

  .content{
    top: 67% !important;
  }
} */


@media screen and (max-width: 480px) {
  section {
    height: 90vh !important;

    .img-1 {
    width: 95%;
top: 28rem;
left: 50%;
transform: translateX(-50%);

  }

  .img-2 {
    width: 90%;
right: 10%;
top: 6rem;
transform: translate(10%, 6rem);
  }

  .dotted-grid {
    visibility: hidden;
    position: absolute;
top: -2rem;
left: -2.5rem;
width: 2rem;
transform: rotate(90deg);
  }

  .content {
    width: 80%;
    position: relative;
    right: 0;
    top: 9% !important;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;


    h2 {
      font-size: 2.5rem;
      letter-spacing: 0.15rem;
      font-weight: 400;
    }

    p {
      font-size: 0.8rem;
    }
  }
  }

  

  img {
    position: absolute;
  }

  
  
}

/* @media (max-width: 360px) {
  .content {
    width: 80%;
    position: relative !important;
    right: 0;
    top: 12% !important;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    p {
      font-size: 0.9rem !important;
    }
  }

  .img-1 {
    top: 92% !important;
    left: 50%;
    transform: translate(-50%, -92%);
  }

  .img-2 {
    left: 50%;
    top: 52% !important;
    transform: translate(-50%, -52%);
  }
} */

/* @media (max-height: 700px) {

  .content {
    margin-top: 1rem;
  }

  .img-1 {
    top: 98% !important;
    transform: translate(-50%, -98%);
  }

  .img-2 {
    top: 56% !important;
    transform: translate(-50%, -56%);
  }
} */


</style>