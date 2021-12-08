<template>
  <section>
    <div class="parent">
      <h2>We'll help you reach the right people</h2>
      <p>
        We identify audience segments with thousands of triggered data action
        combinations which we use to target specific users and their interests
        during campaigns achieving a more efficient way of digital marketing.
      </p>
    </div>

    <!-- Text -->
    <div class="text text-1"><p>beauty</p></div>
    <div class="text text-2"><p>luxury</p></div>
    <div class="text text-3"><p>health</p></div>
    <div class="text text-4"><p>travel</p></div>
    <div class="text text-5"><p>fashion</p></div>
    <div class="text text-6"><p>music</p></div>
    <div class="text text-7"><p>food</p></div>
    <div class="text text-8"><p>finances</p></div>
    <div class="text text-9"><p>automotive</p></div>
    <div class="text text-10"><p>technology</p></div>
    <div class="text text-11"><p>entertainment</p></div>
    <div class="text text-12"><p>sciences</p></div>
    <div class="text text-13"><p>sports</p></div>

    <!-- Avatars -->

    <div class="avatar avatar-1">
      <img
        :src="require('../../../assets/images/avatar-1.png').default"
        alt=""
      />
    </div>

    <div class="avatar avatar-2">
      <img
        :src="require('../../../assets/images/avatar-2.png').default"
        alt=""
      />
    </div>

    <div class="avatar avatar-3">
      <img
        :src="require('../../../assets/images/avatar-3.png').default"
        alt=""
      />
    </div>

    <div class="avatar avatar-4">
      <img
        :src="require('../../../assets/images/avatar-4.png').default"
        alt=""
      />
    </div>

    <div class="avatar avatar-5">
      <img
        :src="require('../../../assets/images/avatar-5.png').default"
        alt=""
      />
    </div>

    <div class="avatar avatar-6">
      <img
        :src="require('../../../assets/images/avatar-6.png').default"
        alt=""
      />
    </div>

    <!-- Mobile screens -->

    <div class="screen screen-1">
      <img
        :src="require('../../../assets/images/screen-1.png').default"
        alt=""
      />
    </div>

    <div class="screen screen-2">
      <img
        class=""
        :src="require('../../../assets/images/screen-2.png').default"
        alt=""
      />
    </div>

    <div class="screen screen-3">
      <img
        :src="require('../../../assets/images/screen-3.png').default"
        alt=""
      />
    </div>

    <div class="screen screen-4">
      <img
        class="screen screen-4"
        :src="require('../../../assets/images/screen-4.png').default"
        alt=""
      />
    </div>

    <div class="screen screen-5">
      <img
        :src="require('../../../assets/images/screen-5.png').default"
        alt=""
      />
    </div>

    <!-- circle -->
    <img
      class="dotted-circle"
      :src="require('../../../assets/images/circle.png').default"
      alt=""
    />

    <img
      class="dotted-grid"
      :src="require('../../../assets/images/dotted-grid.png').default"
      alt=""
    />
  </section>
</template>

<script>
import { ScrollTrigger } from "../../../../public/js/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "RightPeople",
  mounted() {
    this.triggerAnimations();
  },
  methods: {
    triggerAnimations() {

      $(document).ready(function () {
        var controller = new ScrollMagic.Controller();

        var yoyo_bulb = new TimelineMax();
        yoyo_bulb.staggerFrom(
          [".avatar-1", ".avatar-2", ".avatar-3", ".avatar-4", ".avatar-5", ".avatar-6"],
          1,
          {
            opacity: 0,
            scale: 0,
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 0),
          },
          0.5
        );

        var bulb_circles = new ScrollMagic.Scene({
          triggerElement: ".avatar-1",
          triggerHook: 1,
        })
          .setTween(yoyo_bulb)
          .addTo(controller);
      });

      // screens

      // gsap.to(".screen-1", {
      //   autoAlpha: 1,
      //   y: 130,
      //   scrollTrigger: {
      //     trigger: ".screen-1",
      //     start: "top 700px",
      //     end: "bottom 700px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".screen-2", {
      //   autoAlpha: 1,
      //   y: 430,
      //   scrollTrigger: {
      //     trigger: ".screen-2",
      //     start: "top 800px",
      //     end: "bottom 500px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".screen-3", {
      //   autoAlpha: 1,
      //   y: -250,
      //   scrollTrigger: {
      //     trigger: ".screen-3",
      //     start: "top 800px",
      //     end: "bottom 1050px",
      //     // scrub: true,
      //   },
      // });

      // gsap.to(".screen-4", {
      //   autoAlpha: 1,
      //   y: 50,
      //   scrollTrigger: {
      //     trigger: ".screen-1",
      //     start: "top 700px",
      //     end: "bottom 700px",
      //     // scrub: true,
      //     // markers: true,
      //   },
      // });

      // gsap.to(".screen-5", {
      //   autoAlpha: 1,
      //   y: -280,
      //   scrollTrigger: {
      //     trigger: ".screen-5",
      //     start: "top 1050px",
      //     end: "bottom 1050px",
      //     // scrub: true,
      //     // markers: true
      //   },
      // });

      ScrollReveal().reveal('.screen-1', {
        delay: 800,
        duration: 1000,
        distance: '200px',
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'top',
        // reset: true 
    });

     ScrollReveal().reveal('.screen-2', {
        delay: 800,
        duration: 1000,
        distance: '200px',
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'top',
        // reset: true 
    });

    ScrollReveal().reveal('.screen-3', {
        delay: 800,
        duration: 1000,
        distance: '200px',
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'bottom',
        // reset: true 
    });

    ScrollReveal().reveal('.screen-4', {
        delay: 800,
        duration: 700,
        distance: '10px',
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'top',
        // reset: true 
    });

    ScrollReveal().reveal('.screen-5', {
        delay: 800,
        duration: 1000,
        distance: '100px',
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'bottom',
        // reset: true 
    });

      // avatars


      // text
      gsap.to(".text-1", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-2", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-3", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-4", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-5", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-6", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-7", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-8", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-9", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-10", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-11", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-12", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });
      gsap.to(".text-13", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });

      // circle
      gsap.to(".dotted-circle", {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".avatar-3",
          // scrub: true,
          // markers: true,
        },
      });

    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  padding: 3rem 0 0 0;

  .dotted-circle {
    position: absolute;
    transform: rotate(90deg);
    top: 52%;
    left: 15%;
    width: 9rem;
    z-index: -2;
    visibility: hidden;
  }

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    /* bottom: 2rem; */
    top: -2.5rem;
    right: 12%;
    width: 2.5rem;
    /* z-index: -2; */
  }
}

.parent {
  width: 80%;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 3rem;
    letter-spacing: 0.2rem;
    margin-top: 1rem;
    /* margin: 3rem 1rem 1rem 1rem; */
  }

  p {
    text-align: center;
    width: 60%;
    margin: 0 auto;
  }
}

/* screens */

.screen {
  position: absolute;
  width: 18%;
  /* visibility: hidden; */

  img {
    width: 100%;
  }
}

.screen-1 {
  left: 23%;
  top: 43%;
  z-index: 5;
  /* transform: translateY(-15%); */
  /* visibility: hidden; */
}

.screen-2 {
  left: 31%;
  top: 52%;
  z-index: 4;
  /* transform: translateY(-98%); */
}

.screen-3 {
  left: 41%;
  top: 35%;
  z-index: 3;
}

.screen-4 {
  left: 45%;
  top: 38%;
  z-index: 4;
  /* border: 1px solid red; */
  /* transform: translateY(-0%); */
}

.screen-5 {
  left: 63%;
  top: 46%;
  z-index: 3;
}

/* avatars */

.avatar {
  position: absolute;
  /* visibility: hidden; */

  img {
    width: 100%;
  }
}

.avatar-1 {
  width: 4%;
  left: 18%;
  top: 62%;
  /* z-index: 3; */
  transform: translateY(-62%);
}

.avatar-2 {
  width: 4%;
  left: 26%;
  bottom: 8%;
  /* z-index: 3; */
  transform: translateY(8%);
}

.avatar-3 {
  width: 7%;
  left: 37%;
  top: 37%;
  /* z-index: 3; */
  transform: translateY(-37%);
}

.avatar-4 {
  width: 7%;
  left: 55%;
  bottom: 5%;
  /* z-index: 3; */
  transform: translateY(5%);
}

.avatar-5 {
  width: 3.5%;
  left: 68%;
  top: 35%;
  /* z-index: 3; */
  transform: translateY(-35%);
}

.avatar-6 {
  width: 5%;
  left: 77%;
  bottom: 22%;
  /* z-index: 3; */
  transform: translateY(22%);
}

/* text */
.text {
  position: absolute;
  visibility: hidden;

  p {
    background: linear-gradient(to right, #8da5cb 0%, #8da5cb 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  font-weight: 600;
  }
}

.text-1 {
  top: 41%;
  transform: translateY(-41%);
  left: 26%;

  p {
    font-size: 1rem !important;
  }
}

.text-2 {
  bottom: 14%;
  transform: translateY(14%);
  left: 26%;
  p{
    opacity: .8;
  }
}

.text-3 {
  bottom: 4%;
  transform: translateY(4%);
  left: 31%;
  -ms-transform: skew(0deg, 2deg); /* IE 9 */
  transform: skew(0deg, 2deg); /* Standard syntax */

  p {
    font-size: 1rem !important;
  }
}

.text-4 {
  top: 49%;
  transform: translateY(49%);
  left: 38%;
  -ms-transform: skew(-5deg, 0deg); /* IE 9 */
  transform: skew(-5deg, 0deg); /* Standard syntax */
  p {
    font-size: 1rem !important;
  }
}

.text-5 {
  top: 38%;
  transform: translateY(-41%);
  left: 44.5%;
  -ms-transform: skew(-5deg, 0deg); /* IE 9 */
  transform: skew(-5deg, 0deg); /* Standard syntax */
  p {
    font-size: 0.9rem !important;
  }
}

.text-6 {
  top: 43%;
  transform: translateY(-43%);
  left: 50%;
}

.text-7 {
  bottom: 9%;
  transform: translateY(9%);
  left: 45%;

  p{
    opacity: .7;
  }
}

.text-8 {
  bottom: 4%;
  transform: translateY(4%);
  left: 45%;
  -ms-transform: skew(-5deg, 0deg); /* IE 9 */
  transform: skew(-5deg, 0deg); /* Standard syntax */
}

.text-9 {
  top: 35%;
  transform: translateY(-35%);
  left: 60%;
  -ms-transform: skew(-6deg, 0deg); /* IE 9 */
  transform: skew(-6deg, 0deg); /* Standard syntax */
}

.text-10 {
  bottom: 7%;
  transform: translateY(7%);
  left: 63%;
  -ms-transform: skew(-7deg, 0deg); /* IE 9 */
  transform: skew(-7deg, 0deg); /* Standard syntax */
  p {
    font-size: 1rem !important;
  }
}

.text-11 {
  top: 43%;
  transform: translateY(-43%);
  left: 69%;
  -ms-transform: skew(7deg, 0deg); /* IE 9 */
  transform: skew(7deg, 0deg); /* Standard syntax */

  p {
    font-size: 1rem !important;
  }
}

.text-12 {
  bottom: 7%;
  transform: translateY(7%);
  left: 73%;
  -ms-transform: skew(-7deg, 0deg); /* IE 9 */
  transform: skew(-7deg, 0deg); /* Standard syntax */
  p {
    font-size: 1rem !important;
    opacity: .8;
  }
}

.text-13 {
  top: 64%;
  transform: translateY(-64%);
  left: 78%;
  -ms-transform: skew(-7deg, 0deg); /* IE 9 */
  transform: skew(-7deg, 0deg); /* Standard syntax */
  p {
    font-size: 1rem !important;
  }
}

@media screen and (max-width: 480px){
    
section {
  position: relative;
  padding: 0rem 0 0 0;
  height: 70vh;

  .dotted-circle {
    /* position: absolute;
    transform: rotate(90deg);
    top: 52%;
    left: 15%;
    width: 9rem;
    z-index: -2;
    visibility: hidden; */
    display:none;
  }

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    /* bottom: 2rem; */
    top: -2.5rem;
    right: 12%;
    width: 2.5rem;
    /* z-index: -2; */
  }
}

.parent {
  width: 80%;
  margin: 3rem auto 0;
  text-align: center;


  h2 {
      font-size: 2.5rem;
letter-spacing: 0.15rem;
text-transform: capitalize;
width: 80%;
margin: 0.3rem auto 0;
line-height: 2.5rem;
    }

  p {
      text-align: center;
    font-size: .8rem;
    width: 95%;
    /* border: 1px solid blue; */
    margin: 1rem auto 0;
    }
}

/* screens */

.screen {
  width: 25%;

  img {
    width: 100%;
  }
}

.screen-1 {
  /* transform: translateY(-15%); */
  /* visibility: hidden; */

left: 12%;
top: 21rem;
}

.screen-2 {
  /* transform: translateY(-98%); */
  left: 23%;
top: 23rem;
z-index: 4;
}

.screen-3 {
  left: 38%;
top: 18.5rem;
transform: translateY(0%);
}

.screen-4 {
  /* border: 1px solid red; */
  /* transform: translateY(-0%); */
  left: 43%;
top: 9.7rem;
z-index: 4;
}

.screen-5 { 
transform: translateY(0%);
left: 68%;
top: 21.5rem;
z-index: 3;
}

/* avatars */

.avatar {
  position: absolute;
  visibility: hidden;

  img {
    width: 100%;
  }
}

.avatar-1 {
  width: 4%;
  left: 18%;
  top: 62%;
  /* z-index: 3; */
  transform: translateY(-62%);
  width: 8%;
left: 4%;
top: 26rem;
}

.avatar-2 {
  width: 4%;
  left: 26%;
  bottom: 8%;
  /* z-index: 3; */
  transform: translateY(8%);

  width: 7%;
left: 12%;
bottom: 0%;
z-index: 3;
transform: translateY(0%);
top: 30rem;
}

.avatar-3 {
  width: 7%;
  left: 37%;
  top: 37%;
  /* z-index: 3; */
  transform: translateY(-37%);

  width: 9%;
left: 31%;
top: 18rem;
z-index: 3;
transform: translateY(0%);
  
}

.avatar-4 {
  width: 7%;
  left: 55%;
  bottom: 5%;
  /* z-index: 3; */
  transform: translateY(5%);

  width: 10%;
left: 56%;
bottom: 0;
z-index: 3;
transform: translateY(0);
top: 29rem;
}

.avatar-5 {
  width: 3.5%;
  left: 68%;
  top: 35%;
  /* z-index: 3; */
  transform: translateY(-35%);

  width: 8%;
left: 73%;
top: 17rem;
z-index: 3;
transform: translateY(0%);
}

.avatar-6 {
  width: 5%;
  left: 77%;
  bottom: 22%;
  /* z-index: 3; */
  transform: translateY(22%);

  width: 8%;
left: 88%;
bottom: 0%;
z-index: 3;
transform: translateY(0%);
top: 26rem;
}

/* text */
.text {
  position: absolute;
  visibility: hidden;
}

.text-1 {
  top: 41%;
  transform: translateY(-41%);
  left: 26%;

  top: 20rem;
transform: translateY(0%);
left: 16%;
  p {
    font-size: .7rem !important;
  }
}

.text-2 {
  bottom: 14%;
  transform: translateY(14%);
  left: 26%;

  bottom: 0;
transform: translateY(0%);
left: 11%;
top: 29rem;
  p{
    font-size: .7rem !important;
  }
}

.text-3 {
  bottom: 4%;
  transform: translateY(4%);
  left: 31%;
  -ms-transform: skew(0deg, 2deg); /* IE 9 */
  transform: skew(0deg, 2deg); /* Standard syntax */

  bottom: 0;
    transform: translateY(0);
    left: 24%;
    top: 30.5rem;

  p {
    font-size: .7rem !important;
  }
}

.text-4 {
  top: 49%;
  transform: translateY(49%);
  left: 38%;
  -ms-transform: skew(-5deg, 0deg); /* IE 9 */
  transform: skew(-5deg, 0deg); /* Standard syntax */

  top: 22rem;
transform: translateY(0);
left: 31%;

  p {
    font-size: .7rem !important;
  }
}

.text-5 {
  top: 38%;
  transform: translateY(-41%);
  left: 44%;
  -ms-transform: skew(-5deg, 0deg); /* IE 9 */
  transform: skew(-5deg, 0deg); /* Standard syntax */

  top: 18rem;
transform: translateY(0);
left: 40%;

  p {
    font-size: 0.7rem !important;
  }
}

.text-6 {
  top: 43%;
  transform: translateY(-43%);
  left: 47%;

  top: 19.2rem;
transform: translateY(0);
left: 45%;

p {
    font-size: 0.7rem !important;
  }
}

.text-7 {
  bottom: 9%;
  transform: translateY(9%);
  left: 45%;

  bottom: 0;
transform: translateY(0);
left: 43%;
top: 28rem;

p {
    font-size: 0.7rem !important;
  }
}

.text-8 {
  bottom: 4%;
  transform: translateY(4%);
  left: 45%;

  transform: translateY(0);
left: 42%;
top: 30rem;
p {
    font-size: 0.7rem !important;
  }
}

.text-9 {
  top: 35%;
  transform: translateY(-35%);
  left: 56%;
  -ms-transform: skew(-6deg, 0deg); /* IE 9 */
  transform: skew(-6deg, 0deg); /* Standard syntax */

  top: 18.4rem;
transform: translateY(0);
left: 58%;
p {
    font-size: 0.7rem !important;
  }
}

.text-10 {
  bottom: 7%;
  transform: translateY(7%);
  left: 63%;
  -ms-transform: skew(-7deg, 0deg); /* IE 9 */
  transform: skew(-7deg, 0deg); /* Standard syntax */


  left: 67%;
  transform: translateY(0);
top: 30rem;

  p {
    font-size: .7rem !important;
  }
}

.text-11 {
  top: 43%;
  transform: translateY(-43%);
  left: 69%;
  -ms-transform: skew(7deg, 0deg); /* IE 9 */
  transform: skew(7deg, 0deg); /* Standard syntax */

  top: 20.5rem;
transform: translateY(0);
left: 76%;

  p {
    font-size: .7rem !important;
  }
}

.text-12 {
  bottom: 7%;
  transform: translateY(7%);
  left: 73%;
  -ms-transform: skew(-7deg, 0deg); /* IE 9 */
  transform: skew(-7deg, 0deg); /* Standard syntax */

transform: translateY(0);
left: 85%;
top: 29.5rem;
  p {
    font-size: .7rem !important;
  }
}

.text-13 {
  top: 64%;
  transform: translateY(-64%);
  left: 78%;
  -ms-transform: skew(-7deg, 0deg); /* IE 9 */
  transform: skew(-7deg, 0deg); /* Standard syntax */

  top: 24.7rem;
transform: translateY(0);
left: 88%;

  p {
    font-size: .7rem !important;
  }
}


}
</style>