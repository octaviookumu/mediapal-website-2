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
        <h1>SUPPLY</h1>
        <p>
          MediaPal supply-side platform (SSP) is a yield-optimization platform
          that powers publishers. <br /><br />It enables publishers to manage,
          sell and optimize available inventory on their websites and mobile
          apps in an automated and efficient way to as many potential buyers as
          possible.
        </p>
      </div>
    </section>

    <div class="section-2">
      <p>
        MediaPal SSP allows publishers to serve display, video and native ads to
        their visitors, and monetize their website and apps.
      </p>
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <div class="section-3">
      <h2>Benefits of SSP to Publishers</h2>
      <div class="accordion-parent">
        <div class="accordion-section">
          <div class="accordion-container">
            <accordion :benefits="supplyBenefits"></accordion>
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

export default {
  name: "Supply",
  components: { Accordion, Chat, SiteFooter },
  mounted() {
    this.triggerAnimations();
  },
  computed: {
    supplyBenefits: {
      get() {
        return this.$store.getters.GET_SUPPLY_BENEFITS;
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
      gsap.to(".dotted-grid", {
        x: 20,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-grid",
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
section {
  /* border: 1px solid black; */
  position: relative;
  background: url("../../../assets/images/solutions-supply-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 11%;
    width: 26%;
    /* border: 1px solid red; */

    h1 {
      font-size: 4rem;
      color: #257282;
      letter-spacing: 0.5rem;
      /* font-weight: 300 !important; */
    }

    p {
      margin-top: 1rem;
      /* color: #257282; */
      /* font-weight: 100; */
      /* font-size: 1.3rem !important; */
      /* font-family: "brigadiersansregular" !important; */
      /* line-height: 1.6rem; */
      /* letter-spacing: 0.2rem; */
    }
  }
}

.section-2 {
  /* border: 1px solid red; */
  text-align: center !important;
  padding: 6rem 0;
  position: relative;

  p {
    max-width: 38%;
    margin: auto;
    /* font-size: 1.3rem !important; */
    /* border: 1px solid black; */
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    bottom: -2.9rem;
    left: 17%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

/* @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"); */

$card-dark: #257282;
$card-light: #fff;

.section-3 {
  /* border: 1px solid #ecf4f6; */
  background-color: #ecf4f6;
  padding: 4rem 0;

  h2 {
    text-align: center !important;
    font-size: 3rem;
    letter-spacing: 0.1rem;
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
    width: 65%;
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
</style>