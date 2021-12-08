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
        <h1>AUDIENCES</h1>
        <p>
          MediaPal Data Management Platform (DMP) is the brain of MediaPal
          Programmatic Network. <br />It manages, activates, analyzes and
          collects user data from various online and offline channels to achieve
          a more efficient way of digital marketing. Our DMP allows businesses
          to identify audience segments, which is used to target specific users
          and contexts during online advertising campaigns.
        </p>
      </div>
    </section>

    <div class="section-2">
      <p>
        MediaPal DMP is powered by big data and artificial intelligence
        algorithms that process and analyse large data sets about online users
        from various sources achieving data organization, increased insight on
        audiences, and effective advertisement budgeting.
      </p>
      <img
        class="dotted-grid-1 dotted-1"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <img
        class="dotted-grid-2 dotted-2"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <div class="section-3">
      <div class="content">
        <h2>Advanced Audience Targeting</h2>
        <p>250+ audience verticals</p>
      </div>

      <div class="image">
        <img
          :src="
            require('../../../assets/images/solutions-audiences-contextual.png')
              .default
          "
          alt=""
        />
      </div>
    </div>

    <div class="section-4">
      <div class="content">
        <h2>Contextual Keyword Targeting</h2>
        <p>
          In-context targeting is controlled on the basis of the content of a
          website using linguistic elements. The advertisements themselves are
          selected and served by MediaPal based on the context of what a user is
          looking at on the browser.
        </p>
        <div class="context-percent">
          <p>83%</p>
          <p>
            of consumers targeted at the contextual level were more likely to
            recommend the product in the advertisement, than those targeted at
            the audience or channel level.
          </p>
        </div>
      </div>
      <img
        class="dotted-grid dotted-3"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <div class="section-5">
      <h2>Consumer Retargeting</h2>
      <p class="subtext">
        “Brands Increase conversions by retargeting visitors back to their site”
      </p>

      <div class="sub-section-5">
        <div class="image">
          <div class="image-div">
            <img
              :src="
                require('../../../assets/images/audiences-mockup-1.png').default
              "
              alt=""
            />
          </div>
        </div>

        <div class="sub-section-content">
          <p>
            MediaPal retargeting allows an advertiser to display a banner
            created for a particular consumer based on specific pages that they
            viewed. If a consumer visits an advertiser’s website and browses
            product A, they will then be retargeted with a display banner
            featuring the exact product A, that they previously viewed. <br />We
            will bundle offers and products related to the products they were
            viewing to entice them to come back and complete the purchase. This
            is typically restricted to the visitor’s browsing on a single
            website.
          </p>
        </div>
      </div>
    </div>

    <div class="section-6">
      <h2>Benefits of MediaPal DMP</h2>
      <div class="accordion-parent">
        <div class="accordion-section">
          <div class="accordion-container">
            <accordion :benefits="dmpBenefits"></accordion>
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
  name: "Audiences",
  components: { Accordion, Chat, SiteFooter },
  mounted() {
    this.triggerAnimations();
  },
  computed: {
    dmpBenefits: {
      get() {
        return this.$store.getters.GET_DMP_BENEFITS;
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

      gsap.to(".dotted-3", {
        x: -50,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-3",
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
.parent{
  h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
}

section {
  /* border: 1px solid black; */
  position: relative;
  background: url("../../../assets/images/solutions-audiences-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 11%;
    width: 28%;

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
  margin: auto;
  padding: 5rem;
  position: relative;
  background-color: #ecf4f6;

  p {
    max-width: 50%;
    margin: auto;
    /* border: 1px solid black; */
  }

  .dotted-grid-1 {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    bottom: -2.9rem;
    left: 17%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }

  .dotted-grid-2 {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: -2.9rem;
    right: 37%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

.section-3 {
  text-align: center !important;

  .content {
    margin: 4rem 1rem;

    /* h2{
      font-size: 3rem;
    } */
  }

  .image {
    /* border: 1px solid red; */
    width: 60%;
    display: block;
    margin: auto;

    img {
      width: 100%;
      /* z-index: 2; */
    }
  }
}

.section-4 {
  /* border: 1px solid black; */
  padding: 5rem 0;
  background-color: #ecf4f6;
  position: relative;

  .content {
    display: flex;
    flex-direction: column;
    /* border: 1px solid green; */
    width: 48%;
    margin: auto;

    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    h2,
    p {
      text-align: center;
    }
    .context-percent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* border: 1px solid red; */

      p {
        &:first-of-type {
          font-size: 6.8rem;
          font-family: "brigadiersansregular" !important;
          letter-spacing: 0.1rem;
          margin-bottom: 0;
        }
        &:last-of-type {
          text-align: left;
          padding: 1rem 1rem;
          font-weight: 600;
          color: #257282;
          /* border: 1px solid red; */
        }
      }
    }
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
    visibility: hidden;
  }
}

.section-5 {
  padding: 3rem 0;

  h2,
  p {
    text-align: center;
  }

  .subtext {
    font-weight: bold;
    color: #257282;
    margin: 2rem 0;
  }

  h2 {
    text-align: center;
    margin-top: 3rem;
    /* border: 1px solid red; */
  }

  .sub-section-5 {
    display: flex;
    /* border: 1px solid black; */

    .sub-section-content {
      /* border: 1px solid black; */
      flex-basis: 50%;
      padding: 2rem 2rem 2rem 1rem;
      p {
        text-align: start !important;
        /* border: 1px solid red; */
        width: 480px;
      }
    }

    .image {
      flex-basis: 50%;
      /* border: 1px solid red; */
      display: grid;
      place-items: center;

      .image-div {
        width: 40%;
        margin-left: auto;
        margin-right: 1rem;

        img {
          /* border: 1px solid black; */
          width: 100%;
          margin-left: auto;
        }
      }
    }
  }
}

/* @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"); */

$card-dark: #257282;
$card-light: #fff;

.section-6 {
  background-color: #ecf4f6;
  padding: 4rem 0;

  h2 {
    text-align: center !important;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    margin-top: 3rem;
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