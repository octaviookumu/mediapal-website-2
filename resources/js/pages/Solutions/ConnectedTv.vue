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
        <h1>CONNECTED TV</h1>
        <p>
          MediaPal Programmatic TV Advertising gives viewers a full-screen
          branding experience while they consume digital video content on their
          television sets. The ads play at the full resolution of the TV or
          media app load or during content streaming.
        </p>
      </div>
    </section>

    <div class="section-2">
      <p>
        MediaPal Programmatic TV technology helps to automate the process of ad
        delivery on Connected TV through its DSP. It’s a data driven method of
        buying and delivering of ads on TV sets and Apps. The Ad will be served
        once TV audience matching the targeting options watches the TV. The AD
        unit pops up on the TV screen or at the sidebar.
      </p>
    </div>

    <div class="section-3">
      <div class="image">
        <img
          :src="
            require('../../../assets/images/solutions-programmatic-tv.png')
              .default
          "
          alt=""
        />
      </div>

      <div class="section-content">
        <p>
          MediaPal Programmatic TV technology lets the advertisers to show
          different ads to different viewers on same content and enables TV buy
          inside one unifying platform for all channels.<br /><br />MediaPal
          Programmatic TV buying allows advertisers to access the TV impressions
          real-time. The information about users or any other indicator used in
          programmatic ad targeting will be available for tuning in the system.
        </p>
      </div>
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <div class="section-4">
      <p>
        For advertisers, MediaPal Programmatic TV offers the opportunity to grow
        your audience, extend your reach, and control frequency across premium
        connected television inventory and Utilize cross-device frequency
        capping to minimize ad fatigue and increase engagement.
      </p>
    </div>

    <chat></chat>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Chat from "../../components/Chat.vue";
import SiteFooter from "../../components/SiteFooter.vue";

export default {
  name: "ConnectedTv",
  components: { Chat, SiteFooter },
  mounted(){
    this.triggerAnimations() 
  },
  methods:{
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
        x: 30,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-grid",
          start: "top center",
          end: "top 300px",
          scrub: true,
        },
      });
    },
  }
};
</script>

<style lang="scss" scoped>
section {
  /* border: 1px solid black; */
  position: relative;
  background: url("../../../assets/images/solutions-connectedtv-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 11%;
    width: 24%;
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

.section-2, .section-4 {
  background-color: #ecf4f6;
  text-align: center;
  padding: 7rem 0;
  p {
    /* border: 1px solid black; */
    max-width: 50%;
    margin: auto;
  }
}

.section-3 {
  display: flex;
  position: relative;
  padding: 2rem 0;
  /* border: 1px solid black; */

  .section-content {
    flex-basis: 50%;
    /* padding: 5rem 5rem 5rem 2rem; */
    /* border: 1px solid red; */

    p{
      /* border: 1px solid blue; */
      padding: 5rem 0 5rem 2rem;
      max-width: 60%;
      margin-right: auto;
    }
  }

  .image {
    flex-basis: 50%;
    padding: 2rem 0;
    /* border: 1px solid red; */

    img {
      /* border: 1px solid black; */
      width: 80%;
      display: block;
      /* margin: auto; */
      margin: 0 0 0 auto;
    }
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: 1.7rem;
    left: 40%;
    width: 3rem;
    z-index: -2;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

</style>