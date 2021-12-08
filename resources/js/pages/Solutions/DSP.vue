<template>
  <div class="parent">
    <img
      class="sidenav-hamburger"
      :src="require('../../../assets/images/sidenav-hamburger.png').default"
      alt=""
      @click="showSideNav()"
    />

    <img
      class="sidenav-close"
      :src="require('../../../assets/images/sidenav-close.png').default"
      alt=""
      @click="closeSideNav()"
    />

    <div class="side-container">
      <div class="presence">
        <div class="presence-header">
          <h2>MediaPal Presence</h2>
        </div>

        <div class="presence-footer">
          <ul>
            <li>Africa</li>
            <li>United States</li>
            <li>Europe</li>
            <li>Asia</li>
            <li>Australia</li>
            <li>Middle East</li>
          </ul>
        </div>

        <img
          :src="require('../../../assets/images/mediapal-presence.png').default"
          alt=""
        />
      </div>
    </div>
    
    <section>
      <div class="content">
        <h1>OMNICHANNEL DSP</h1>
        <p>
          Stay inspired with <br />
          modern solutions.
        </p>
      </div>
    </section>

    <div class="section-2">
      <img
        class="dotted-grid dotted-1"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <div class="section-content">
        <p>
          We offer the complete set of capabilities necessary to manage
          coordinated omnichannel campaigns including execution, creative
          alignment, targeting and reporting in a centralised location allowing
          marketers to transcend siloed channel buying and focus on driving
          great consumer experiences and incremental business results from their
          marketing.
        </p>
      </div>

      <div class="image">
        <img
          :src="
            require('../../../assets/images/solutions-omnichannel.png').default
          "
          alt=""
        />
      </div>
    </div>

    <div class="section-3">
      <img
        class="dotted-circle"
        :src="require('../../../assets/images/circle.png').default"
        alt=""
      />
      <img
        class="dotted-grid dotted-2"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <div class="image">
        <img
          :src="require('../../../assets/images/admanager-mockup.png').default"
          alt=""
        />
      </div>

      <div class="section-content">
        <p>
          Our unified yet flexible marketing stack means you have everything you
          need in one powerful dashboard from DSP and DMP ad serving
          capabilities to seamless creative management.
        </p>
      </div>
    </div>

    <div class="section-4">
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <h2>Benefits of our Omnichannel Platform</h2>
      <div class="accordion-parent">
        <div class="accordion-section">
          <div class="accordion-container">
            <accordion :benefits="dspBenefits"></accordion>
          </div>
        </div>
      </div>
    </div>

    <chat></chat>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Accordion from "../../components/Accordion.vue";
import Chat from "../../components/Chat.vue";
import SiteFooter from "../../components/SiteFooter.vue";
import { ScrollTrigger } from "../../../../public/js/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { Accordion, Chat, SiteFooter },
  name: "DSP",
  mounted() {
    this.triggerAnimations();
  },
  computed: {
    dspBenefits: {
      get() {
        return this.$store.getters.GET_DSP_BENEFITS;
      },
    },
  },
  methods: {
    showSideNav() {
      let sideNav = document.querySelector(".side-container");
      let sideNavClose = document.querySelector(".sidenav-close");

      sideNav.style.cssText =
        "right: 0 !important; transition: right .7s ease-in-out";
      setTimeout(() => {
        sideNavClose.style.cssText =
          "display: block !important; transition: display .2s ease-in-out;";
      }, 500);
    },
    closeSideNav() {
      let sideNav = document.querySelector(".side-container");
      let sideNavHamburger = document.querySelector(".sidenav-hamburger");
      let sideNavClose = document.querySelector(".sidenav-close");

      sideNav.style.cssText =
        "right: -100% !important; transition: right .7s ease-in-out; ";
      sideNavHamburger.style.cssText =
        "display: block !important; transition: display .7s ease-in-out";
      sideNavClose.style.cssText =
        "display: none !important; transition: display .7s ease-in-out; transition-delay: .2s;";
    },
    triggerAnimations() {
      gsap.to(".dotted-1", {
        x: 20,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-1",
          start: "top center",
          end: "top 300px",
          scrub: true,
        },
      });

      gsap.to(".dotted-2", {
        x: -50,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-2",
          start: "top center",
          end: "top 300px",
          scrub: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav-hamburger {
  position: fixed;
  top: 2rem;
  right: 13%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 180;
}

/* @media (max-width: 480px){
  .sidenav-hamburger {
  display: none;
}
} */

@media (max-width: 768px){
  .sidenav-hamburger {
  display: none;
}
}

.sidenav-close {
  /* border: 1px solid red; */
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 22px;
  height: 22px;
  cursor: pointer;
  z-index: 210;
  display: none;
}

.side-container {
  position: fixed;
  top: 0%;
  /* right: 0%; */
  z-index: 200;
  /* background: #fff; */
  width: 100%;
  height: 100%;
  right: -100%;
  display: flex;
  /* border: 1px solid red; */

  .presence {
    /* width: 70%; */
    height: 100%;
    flex-basis: 100%;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid blue; */
    p,
    li {
      color: #257282 !important;
    }

    .presence-header {
      /* border: 1px solid red; */
      margin-top: 2%;

      p{
        font-family: "brigadiersansregular" !important;
      }

      p {
        &:first-of-type {
          font-size: 4rem !important;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          /* border: 1px solid blue; */
          margin-bottom: 0;
          padding: 0;
          line-height: 4rem;
          
        }
        &:last-child {
          font-size: 2rem !important;
          letter-spacing: 0.1rem;
          font-family: 'Bebas Neue', cursive;
          /* border: 1px solid red; */
        }
      }
    }

    .presence-footer {
      /* border: 1px solid black; */
      margin-bottom: 2%;

      ul {
        list-style: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;

        li {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
          font-size: 3rem !important;
          margin: 0 1rem;
          letter-spacing: 0.1rem;
          font-family: "brigadiersansregular" !important;

          &:not(:nth-of-type(1)) {
            padding-left: 1.3rem;
            /* border: 1px solid red; */
            border-left: 1px solid #00000029;
            /* border-left-width: 2px;
          border-left-style: solid;
          border-left-color: grey; */
          }

          /* &:not(:nth-of-type(6)){
          border: 1px solid red !important;
        } */

          /* &:nth-last-of-type() */
        }
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      z-index: -1;
      object-fit: cover;
      /* border: 1px solid red; */
    }
  }
}

.side-nav {
  top: 0%;
  right: 0%;
  z-index: 200;
  background: #fff;
  flex-basis: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .links {
    list-style-type: none;
    /* border: 1px solid red; */
    margin: 5rem 0 0 0;
    padding: 0;
    text-align: center;
    border-bottom: 1px solid lightgray;

    li {
      text-transform: uppercase;
      font-family: "brigadiersansregular" !important;
      /* border: 1px solid blue; */
      font-size: 2.5rem;
      margin: 1.5rem 0;
      color: #69a1ab;
      letter-spacing: 0.2rem;
      border-bottom: 3px solid #fff;
      /* cursor: pointer; */

      /* &:hover {
        border-bottom: 3px solid #fda041;
        transition: border-bottom 0.3s ease-in-out;
      } */
    }
  }

  .social-icons {
    /* margin-top: auto; */
    margin: auto 0 2rem 0;

    .footer-social-icon {
      color: #257282;
      &:hover {
        color: #fda041;
      }
    }
  }

  .copyright {
    font-size: 0.7rem !important;
    margin-bottom: 2rem;
  }
}

section {
  /* border: 1px solid black; */
  position: relative;
  background: url("../../../assets/images/solutions-dsp-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 10%;

    h1 {
      font-size: 3rem !important;
      color: #257282;
      letter-spacing: 0.4rem;
      font-weight: 300 !important;
    }

    p {
      font-weight: 400;
      font-size: 6rem !important;
      font-family: "brigadiersansregular" !important;
      line-height: 6rem;
      letter-spacing: 0.2rem;
      color: #257282;
    }
  }
}

.section-2 {
  display: flex;
  /* border: 1px solid black; */
  position: relative;
  background-color: #effbfc;

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    /* bottom: 2rem; */
    top: -3.5rem;
    left: 10%;
    width: 3rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }

  .section-content {
    flex-basis: 40%;
    padding: 9rem 0rem 9rem 0rem;
    /* border: 1px solid blue; */

    p {
      /* border: 1px solid red; */
      width: 64%;
      margin-right: auto;
      margin-left: 30%;
      /* font-weight: 400; */
      /* font-size: 1.3rem !important; */
    }
  }

  .image {
    flex-basis: 60%;
    /* border: 1px solid red; */
    display: grid;
    place-items: center;

    img {
      /* border: 1px solid black; */
      width: 100%;
      display: block;
      margin: auto;
    }
  }
}

.section-3 {
  display: flex;
  /* border: 1px solid black; */
  position: relative;

  .dotted-circle {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: 2.5rem;
    left: 42%;
    width: 8rem;
    z-index: -2;
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: -3.5rem;
    right: 25%;
    width: 3rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }

  .section-content {
    flex-basis: 45%;
    padding: 8rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      width: 330px;
      /* color: #257282; */
      /* font-size: 1.3rem !important; */
      /* margin: 2rem auto auto 0; */
      /* margin-right: auto; */
      /* border: 1px solid green; */
      /* margin-right: auto; */
      /* margin: auto auto auto 0; */
    }
  }

  .image {
    flex-basis: 55%;
    padding: 4rem 0;
    /* border: 1px solid black; */

    img {
      /* border: 1px solid red; */
      width: 95%;
      display: block;
      margin-left: auto;
    }
  }
}

/* @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"); */

$card-dark: #257282;
$card-light: #fff;

.section-4 {
  background-color: #ecf4f6;
  /* padding-top: 2rem; */
  padding: 4rem 0;
  position: relative;

  h2 {
    text-align: center !important;
    font-size: 2.5rem;
    color: #257282;
    letter-spacing: 0.1rem;
    font-weight: 300 !important;
    /* border: 1px solid red; */
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    bottom: -2.6rem;
    /* left: 40%; */
    /* transform: translateX(-50%); */
    width: 2.5%;
    margin: 0 48.75%;
  }
}

.accordion {
  &-parent {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: color 0.15s ease-in-out;
    transition: color 0.15s ease-in-out;
    display: -ms-grid;
    display: grid;
    place-items: center;
    /* font-family: "Kumbh Sans", sans-serif; */
    /* font-size: 16px; */
  }

  &-section {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 60%;
    /* height: 350px; */
    /* border-radius: 20px; */
    /* background-color: aliceblue;
  -webkit-box-shadow: 0px 10px 80px -10px rgba(0, 0, 0, 0.72);
          box-shadow: 0px 10px 80px -10px rgba(0, 0, 0, 0.72); */
  }

  &-container {
    width: 100%;
    margin: 40px 40px;
  }
}

@media (max-width: 480px) {
  section {
    background-size: 100% 40%;

    .content {
      text-align: center;
      left: initial;
      transform: initial;
    }
  }

  .section-2 {
    flex-direction: column;

    .section-content {
      flex-basis: 100%;
      padding: 2rem;
      text-align: center;
    }

    .image {
      flex-basis: 100%;
    }
  }

  .section-3 {
    flex-direction: column;

    .section-content {
      order: 1;
      flex-basis: 100%;
      padding: 2rem;
      text-align: center;
    }

    .image {
      order: 2;
      flex-basis: 100%;
    }
  }
}
</style>
