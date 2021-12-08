
<template>
  <section>
    <h2>Powerful Creative Experience</h2>
    <p>
      Creative agencies can use MediaPal Creative Studio tools to make native,
      lead generation, video and rich media ads. It allows you to generate,
      preview and test creatives.
    </p>
    <div class="phones-div">
      <div class="phone-1 one">
        <img
          :src="require('../../../assets/images/phone-screens-1.png').default"
          alt=""
        />
      </div>

      <div class="phone-2 phone two">
        <img
          :src="require('../../../assets/images/phone-screens-2.png').default"
          alt=""
        />
      </div>

      <div class="phone-3 phone three">
        <img
          :src="require('../../../assets/images/phone-screens-3.png').default"
          alt=""
        />
      </div>
    </div>

    <!-- <div class="parent">
      
      
    </div> -->
    <img
      class="dotted-grid-1"
      :src="require('../../../assets/images/dotted-grid.png').default"
      alt=""
    />
    <img
      class="dotted-circle"
      :src="require('../../../assets/images/circle.png').default"
      alt=""
    />
    <div class="orange-line"></div>
  </section>
</template>

<script>
import { ScrollTrigger } from "../../../../public/js/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "PowerfulExperience",
  mounted() {
    this.triggerAnimations();
  },
  methods: {
    triggerAnimations() {
      // gsap.to(".two", {
      //   x: 100,
      //   autoAlpha: 1,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top 800px",
      //     end: "bottom 900px",
      //     scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".three", {
      //   x: 200,
      //   autoAlpha: 1,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top 700px",
      //     end: "top 400px",
      //     scrub: true,
      //   },
      // });
      ScrollReveal().reveal('.phone-2', {
        delay: 800,
    duration: 1000,
    distance: '200px',
    easing: 'ease-in-out',
    opacity: 0,
    origin: 'left',
    // reset: true 
    });
    ScrollReveal().reveal('.phone-3', {
        delay: 1200,
    duration: 1000,
    distance: '200px',
    easing: 'ease-in-out',
    opacity: 0,
    origin: 'left',
    // reset: true 
    });
    ScrollReveal().reveal('.dotted-grid-1', {
        delay: 1200,
    duration: 1000,
    distance: '200px',
    easing: 'ease-in-out',
    opacity: 0,
    origin: 'left',
    // reset: true 
    });
    // gsap.to(".dotted-grid-1", {
    //   x: 100,
    //   autoAlpha: 1,
    //   scrollTrigger: {
    //     trigger: ".dotted-grid-1",
    //     start: "top center",
    //     end: "top 300px",
    //     scrub: true,
    //     // markers: true,
    //   },
    // });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  text-align: center;
  /* border: 1px solid #ecf4f6; */
  /* border: none; */

  h2 {
    font-size: 3rem;
    margin-top: 4rem;
    letter-spacing: 0.2rem;
  }

  p {
    text-align: center;
    width: 40%;
    margin: 0 auto;
    font-size: 300 !important;
  }

  .phones-div {
    width: 70%;
    /* height: 100%; */
    /* display: block; */
    margin: 1rem auto 0;
    /* border: 1px solid green; */
    position: relative;

    div {
      /* border: 1px solid red; */
      position: absolute;
      width: 50%;
    }

    .phone-1 {
      left: 5%;
      top: 8rem;

      img {
        width: 85%;
      }
    }

    .phone-2 {
      left: 54%;
      transform: translateX(-54%);
      top: 4rem;
      /* visibility: hidden; */

      img {
        width: 85%;
      }
    }

    .phone-3 {
      left: 95%;
      transform: translateX(-95%);
      top: 0rem;
      /* visibility: hidden; */

      img {
        width: 85%;
      }
    }

    /* .phones {
    border: 1px solid red;
    width: 100%;
  } */
  }

  .dotted-grid-1 {
    position: absolute;
    transform: rotate(90deg);
    bottom: 4rem;
    left: 7%;
    width: 2.5rem;
    /* border: 1px solid red; */
  }

  .dotted-circle {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: 34%;
    left: 16%;
    width: 10rem;
    z-index: -2;
    /* border: 1px solid red; */
  }

  .orange-line {
    position: absolute;
    height: 0.3rem;
    background-color: #fda041;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 20%;
    /* border: 1px solid red; */
    border-radius: 2rem;
  }
}

/* .parent {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border: 1px solid red;

  h2{
    font-size: 3rem;
    margin-top: 2rem;
    letter-spacing: .2rem;
  }

  p {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }

  
} */

/* @media only screen and (min-width: 400px) and (max-width: 480px) */

@media screen and (max-width: 480px){
  section {
  height: 70vh;
  /* border: 1px solid #ecf4f6; */
  /* border: none; */

  h2 {
    font-size: 2.5rem;
    margin-top: 4rem;
    letter-spacing: 0.15rem;
  }

  p {
    text-align: center;
    font-size: .8rem;
    width: 90%;
    margin: 0 auto;
  }

  .phones-div {
    width: 100%;
    /* height: 100%; */
    /* display: block; */
    margin: .5rem auto 0;
    /* border: 1px solid green; */
    position: relative;

    div {
      position: absolute;
      width: 60%;
    }

    .phone-1 {
      left: -.5rem;
      top: 6rem;

      img {
        width: 85%;
      }
    }

    .phone-2 {
      left: 23%;
      transform: translateX(0%);
      top: 4rem;

      img {
        width: 85%;
      }
    }

    .phone-3 {
      left: 48%;
      transform: translateX(0%);
      top: 2.3rem;

      img {
        width: 85%;
      }
    }
  }

  .dotted-grid-1 {
    position: absolute;
    transform: rotate(90deg);
    bottom: 4rem;
    left: 14%;
    width: 2rem;
    /* border: 1px solid red; */
  }

  .dotted-circle {
    position: absolute;
    transform: rotate(90deg);
    top: 14rem;
    left: -5%;
    width: 5rem;
    z-index: -2;
  }

  .orange-line {
    position: absolute;
    height: 0.3rem;
    background-color: #fda041;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 40%;
    border-radius: 2rem;
  }
}
}

/* @media (max-width: 414px){
  section {
  .phones-div {

    .phone-2 {
      left: 1%;
      top: 4rem;
    }

    .phone-3 {
      left: -2%;
    }
  }

  .dotted-grid {
    position: absolute;
    bottom: 4rem;
    left: -2%;
    width: 2rem;
  }

  .dotted-circle {
    position: absolute;
    transform: rotate(90deg);
    top: 14rem;
    left: -5%;
    width: 5rem;
    z-index: -2;
  }

  .orange-line {
    position: absolute;
    height: 0.3rem;
    background-color: #fda041;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 40%;
    border-radius: 2rem;
  }
}
} */

/* @media (max-width: 360px){
  section {
  height: 70vh;


  .phones-div {

    .phone-1 {
      left: 0%;
      top: 6rem;
    }

    .phone-2 {
      left: -2%;
      transform: translateX(50%);
      top: 4rem;
    }

    .phone-3 {
      left: -7%;
      top: 1.8rem;
    }
  }

  .dotted-grid {
    position: absolute;
    bottom: 3rem;
    left: -2%;
    width: 2rem;
  }

  .dotted-circle {
    position: absolute;
    transform: rotate(90deg);
    top: 14rem;
    left: -5%;
    width: 5rem;
    z-index: -2;
  }

  .orange-line {
    position: absolute;
    height: 0.3rem;
    background-color: #fda041;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 40%;
    border-radius: 2rem;
  }
}
} */

</style>