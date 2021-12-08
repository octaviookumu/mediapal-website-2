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
        <h1>DIGITAL OUT OF HOME</h1>
        <p>
          MediaPal is one of the leading omnichannel DSP to integrate Digital
          Out-of-Home (DOOH) within its platform, partnering with the top OOH
          media owners and has unprecedented access to inventory in public and
          private spaces that were previously inaccessible programmatically.
        </p>
      </div>
      <div class="image-div">
        <img
          :src="
            require('../../../assets/images/solutions-dooh-mockup-1.png')
              .default
          "
          alt=""
        />
      </div>
    </section>

    <div class="section-2">
      <img
        class="dotted-grid dotted-1"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <p>
        We are able to not only set up DOOH campaigns, but also be able to
        measure the campaigns with the same metrics familiar to digital buys on
        desktop or mobile combining the unparalleled viewability of traditional
        out-of-home advertising with the efficiency of digital advertising, in a
        brand-safe environment and compare OOH buys against the rest of the
        digital platforms.
      </p>
    </div>

    <div class="section-3">
      <div class="section-content">
        <p>
          OOH advertising is about messaging to consumers when they are in
          public places, commuting to work, and in specific commercial
          locations. DOOH adds the power of AdTech to this impactful channel,
          including geofencing, tracking, retargeting, personalizing,
          attribution and measurement to drive awareness and consideration by
          reaching consumers across a variety of locations, offering an
          advertiser the chance to reach new and existing consumers while they
          are out and about.
        </p>
      </div>

      <div class="image">
        <div class="image-div">
          <img
            :src="
              require('../../../assets/images/solutions-dooh-mockup-2.png')
                .default
            "
            alt=""
          />
        </div>
      </div>
      <img
        class="dotted-grid dotted-2"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <div class="section-4">
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <h2>Benefits of Digital Out of Home</h2>
      <div class="accordion-parent">
        <div class="accordion-section">
          <div class="accordion-container">
            <accordion :benefits="doohBenefits"></accordion>
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
  name: "DOOH",
  components: { Accordion, Chat, SiteFooter },
  mounted() {
    this.triggerAnimations();
  },
  computed: {
    doohBenefits: {
      get() {
        return this.$store.getters.GET_DOOH_BENEFITS;
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
        x: 50,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-1",
          start: "top center",
          end: "top 300px",
          scrub: true,
        },
      });

      gsap.to(".dotted-2", {
        x: -46,
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
.parent {
  position: relative;
}

section {
  position: relative;
  background: url("../../../assets/images/solutions-dooh-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .image-div {
    position: absolute;
    top: 24%;
    right: 8%;
    width: 40%;
    z-index: 3;

    img {
      width: 100%;
    }
  }

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 11%;
    width: 30%;
    /* border: 1px solid red; */

    h1 {
      font-size: 4rem;
      color: #257282;
      letter-spacing: 0.5rem;
      /* font-weight: 300 !important; */
    }

    p {
      margin-top: 1rem;
      width: 90%;
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
  /* border: 1px solid red;
  text-align: center !important;
  max-width: 50%;
  margin: auto;
  padding: 3rem; */

  text-align: center !important;
  margin: auto;
  padding: 8rem 5rem;
  position: relative;
  background-color: #edf8f9;

  p {
    max-width: 50%;
    margin: auto;
    /* font-size: .9rem !important; */
    /* border: 1px solid black; */
  }

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    /* bottom: 2rem; */
    top: -2.9rem;
    left: 8%;
    width: 2.8rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

.section-3 {
  display: flex;
  /* border: 1px solid black; */
  position: relative;

  .section-content {
    flex-basis: 50%;
    padding: 7rem 1rem 7rem 7rem;
    /* border: 1px solid red; */

    p {
      margin-left: 8%;
      max-width: 80%;
      /* font-size: .9rem !important; */
      /* border: 1px solid red; */
      /* max-width: 50%; */
      /* color: #257282; */
    }
  }

  .image {
    flex-basis: 50%;
    /* border: 1px solid red; */
    display: grid;
    place-items: center;

    .image-div {
      width: 70%;
      margin-right: auto;
      img {
        /* border: 1px solid black; */
        width: 100%;
      }
    }
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: 2.8rem;
    right: 40%;
    width: 2.5rem;
    z-index: -3;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

/* @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"); */

$card-dark: #257282;
$card-light: #fff;

.section-4 {
  background-color: #ecf4f6;
  padding: 4rem 0;
  position: relative;
  /* border: 1px solid red; */

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
    bottom: -2.5rem;
    /* left: 50%; */
    width: 2.5%;
    margin: 0 48.75%;
    /* margin: auto; */
    /* border: 1px solid red; */
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
    /* border: 1px solid blue; */
    /* font-family: "Kumbh Sans", sans-serif; */
    /* font-size: 16px; */
  }

  &-section {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 45%;
    /* border: 1px solid green; */
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

  &-list {
    width: 100%;
    /* height: 100%; */
    /* height: 200px; */
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    /* width: 80%; */
    /* margin: auto; */
    text-align: left !important;
    /* border: 1px solid red; */
  }
}
</style>