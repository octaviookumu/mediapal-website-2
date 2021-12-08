<template>
<!-- dentsu -->
<!-- posterscope -->
  <section>
    <h2>Our Partners</h2>

    <div class="image-div">
      <img
        :src="require('../../../assets/images/partners.png').default"
        alt=""
      />
    </div>

    <div class="partner partner-1">
      <img
        :src="require('../../../assets/images/partner-1.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-2">
      <img
        :src="require('../../../assets/images/partner-2.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-3">
      <img
        :src="require('../../../assets/images/partner-3.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-4">
      <img
        :src="require('../../../assets/images/partner-4.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-5">
      <img
        :src="require('../../../assets/images/partner-5.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-6">
      <img
        :src="require('../../../assets/images/partner-6.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-7">
      <img
        :src="require('../../../assets/images/partner-7.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-8">
      <img
        :src="require('../../../assets/images/partner-8.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-9">
      <img
        :src="require('../../../assets/images/partner-9.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-10">
      <img
        :src="require('../../../assets/images/partner-10.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-11">
      <img
        :src="require('../../../assets/images/partner-11.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-12">
      <img
        :src="require('../../../assets/images/partner-12.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-13">
      <img
        :src="require('../../../assets/images/partner-13.png').default"
        alt=""
      />
    </div>
    <div class="partner partner-14">
      <img
        :src="require('../../../assets/images/partner-14.png').default"
        alt=""
      />
    </div>

    <div class="page-buttons">
      <!-- <button> -->
      <router-link :to="{ name: 'advertisers' }" class="button-link"
        >Solutions for advertisers</router-link
      >
      <!-- </button> -->
      <!-- <button> -->
      <router-link :to="{ name: 'publishers' }" class="button-link"
        >Solutions for publishers</router-link
      >
      <!-- </button> -->
    </div>
  </section>
</template>

<script>
import { ScrollTrigger } from "../../../../public/js/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Partners",
  mounted() {
    this.triggerAnimations();
  },
  methods: {
    triggerAnimations() {
      gsap.to(".partner-1", {
        autoAlpha: 1,
        duration: 500,
        scrollTrigger: {
          trigger: ".partner-1",
          start: "top 700px",
          end: "bottom 500px",
          scrub: true,
          //   markers: true,
        },
      });

      gsap.to(".partner-2", {
        autoAlpha: 1,
        // duration: 700,
        scrollTrigger: {
          trigger: ".partner-2",
          start: "bottom 800px",
          end: "bottom 700px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-3", {
        autoAlpha: 1,
        // duration: 700,
        scrollTrigger: {
          trigger: ".partner-3",
          start: "bottom 800px",
          end: "bottom 700px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-4", {
        autoAlpha: 1,
        duration: 700,
        scrollTrigger: {
          trigger: ".partner-4",
          start: "top 800px",
          end: "bottom 500px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-5", {
        autoAlpha: 1,
        // duration: 700,
        scrollTrigger: {
          trigger: ".partner-5",
          start: "bottom 800px",
          end: "bottom 700px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-6", {
        autoAlpha: 1,
        duration: 100,
        scrollTrigger: {
          trigger: ".partner-6",
          start: "top 700px",
          end: "bottom 200px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-7", {
        autoAlpha: 1,
        duration: 700,
        scrollTrigger: {
          trigger: ".partner-7",
          start: "bottom 800px",
          end: "bottom 700px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-8", {
        autoAlpha: 1,
        // duration: 700,
        scrollTrigger: {
          trigger: ".partner-8",
          start: "bottom 800px",
          end: "bottom 700px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-9", {
        autoAlpha: 1,
        duration: 700,
        scrollTrigger: {
          trigger: ".partner-9",
          start: "bottom 800px",
          end: "bottom 700px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-10", {
        autoAlpha: 1,
        duration: 100,
        scrollTrigger: {
          trigger: ".partner-10",
          start: "top 900px",
          end: "bottom 50px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-11", {
        autoAlpha: 1,
        duration: 100,
        scrollTrigger: {
          trigger: ".partner-11",
          start: "top 800px",
          end: "bottom 100px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-12", {
        autoAlpha: 1,
        duration: 100,
        scrollTrigger: {
          trigger: ".partner-12",
          start: "top 700px",
          end: "bottom 200px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-13", {
        autoAlpha: 1,
        // duration: 100,
        scrollTrigger: {
          trigger: ".partner-13",
          start: "top 700px",
          end: "bottom 200px",
          scrub: true,
          // markers: true,
        },
      });

      gsap.to(".partner-14", {
        autoAlpha: 1,
        duration: 100,
        scrollTrigger: {
          trigger: ".partner-14",
          start: "top 700px",
          end: "bottom 200px",
          scrub: true,
          // markers: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  text-align: center;
  position: relative;
  /* background: url('../../../assets/images/partners.png'); */
  /* background-position: center; */
  /* background-size: 90% 90%; */
  /* background-color: #fdf7e5; */
  background-color: #fcf7e7;
}

h2 {
  position: absolute;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  top: 3.7rem;
  /* display: flex;
    justify-content: center;
    align-items: center; */
  /* text-align: center; */
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  /* border: 1px solid red; */
}

.image-div {
  position: absolute;
  width: 70%;
  margin: auto;
  top: 65%;
  /* height: 100%; */
  /* border: 1px solid black; */
  left: 50%;
  transform: translate(-50%, -65%);

  img {
    width: 100%;

    object-fit: cover;

    /* width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0; */
  }
}

.partner {
  position: absolute;
  visibility: hidden;

  img {
    width: 100%;
  }
}

.partner-1 {
  width: 9%;
  top: 67%;
  left: 32%;
}

.partner-2 {
  width: 13%;
  top: 17%;
  left: 51%;
}

.partner-3 {
  width: 17%;
  top: 31%;
  left: 61%;
}

.partner-4 {
  width: 17%;
  top: 38%;
  left: 67%;
}

.partner-5 {
  width: 9%;
  top: 69%;
  left: 58%;
}

.partner-6 {
  width: 8%;
  top: 54%;
  left: 66%;
}

.partner-7 {
  width: 17%;
  top: 62%;
  left: 64%;
}

.partner-8 {
  width: 10%;
  top: 77%;
  left: 50%;
  transform: translateX(-50%);
}

.partner-9 {
  width: 11%;
  top: 47%;
  left: 67%;
}

.partner-10 {
  width: 9%;
  top: 20.5%;
  left: 40%;
}

.partner-11 {
  width: 11%;
  top: 58%;
  left: 21%;
}

.partner-12 {
  width: 8%;
  top: 46%;
  left: 23%;
}

.partner-13 {
  width: 8%;
  top: 38%;
  left: 27%;
}

.partner-14 {
  width: 11%;
  top: 30%;
  left: 29%;
}

.page-buttons {
  /* margin-top: auto; */
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 34%;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);

  .button-link {
    &:hover {
      color: orange;
      background: transparent;
      border-color: orange;
    }
  }

  /* .button-link {
    padding: 0.4rem 1rem !important;
    background-color: transparent;
    border: 2px solid #257282;
    color: #257282;
    cursor: pointer;
    outline: none;
    display: inline-block;
    border-radius: 20px;
    font-weight: 500;

    &:hover {
      color: #fff;
      background-color: #257282;
      transition: all 0.2s ease-in-out;
    }
  } */
}

@media (max-width: 480px) {
  section {
    height: 60vh;
    text-align: center;
    position: relative;
    /* background: url('../../../assets/images/partners.png'); */
    /* background-position: center; */
    /* background-size: 90% 90%; */
    background-color: #fdf7e5;
    /* border: 1px solid red; */
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 0;
    letter-spacing: 0.15rem;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    /* border: 1px solid red; */
  }

  .image-div {
    margin: auto;
    width: 100%;
    top: 40%;
    transform: translate(-50%, -40%);
  }

  .partner {
    position: absolute;
    visibility: hidden;

    img {
      width: 100%;
    }
  }

  .partner-1 {
    width: 13%;
    top: 55%;
    left: 26%;
  }

  .partner-2 {
    width: 17%;
    top: 23.5%;
    left: 53%;
  }

  .partner-3 {
    width: 24%;
    top: 31%;
    left: 65%;
  }

  .partner-4 {
    width: 22%;
    top: 35%;
    left: 72%;
  }

  .partner-5 {
    width: 14%;
    top: 54%;
    left: 61%;
  }

  .partner-6 {
    width: 10%;
    top: 45%;
    left: 72%;
  }

  .partner-7 {
    width: 22%;
    top: 50%;
    left: 68%;
  }

  .partner-8 {
    width: 14%;
    top: 59%;
    left: 50%;
    transform: translateX(-50%);
  }

  .partner-9 {
    width: 16%;
    top: 40%;
    left: 73%;
  }

  .partner-10 {
    width: 13%;
    top: 24.5%;
    left: 35%;
  }

  .partner-11 {
    width: 16%;
    top: 50%;
    left: 11%;
  }

  .partner-12 {
    width: 10%;
    top: 42%;
    left: 12%;
  }

  .partner-13 {
    width: 12%;
    top: 37%;
    left: 16%;
  }

  .partner-14 {
    width: 16%;
    top: 31%;
    left: 18%;
  }

  .page-buttons {
    bottom: 3rem;
    /* margin-top: auto; */

    /* margin-top: 1rem; */
    width: 54%;
    /* border: 1px solid red; */
    flex-direction: column;

    .button-link {
      padding: 0.4rem !important;
      background-color: transparent;
      /* border: 2px solid #257282;
color: #257282;
cursor: pointer;
outline: none;
display: inline-block;
border-radius: 20px;
font-weight: 500; */
display: inline-block;
      font-size: 0.8rem;

      &:first-of-type {
        margin-bottom: 1rem;
      }

      &:hover {
        color: orange;
        background: transparent;
        border-color: orange;
      }
    }
  }
}
</style>