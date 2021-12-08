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
        <h1>FOOTFALL</h1>
        <p>
          MediaPal Footfall attribution correlates the campaign impressions to
          actual store visits which translates to success based on the number of
          customers that walk through their doors.
        </p>
      </div>
    </section>

    <div class="section-2">
      <p>
        Digital marketing techniques are very efficient in determining the
        number of consumers who view your ads. However, they are often not
        sufficient to determine whether the consumer who received the
        advertisement physically visited the store. <br /><br />Footfall
        attribution is therefore a clever mix of the results obtained from
        digital campaign impressions and the data collected from actual store
        visits.
      </p>
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <div class="section-3">
      <div class="text-content">
        <p>
          Footfall attribution studies provide valuable insight in aspects like
          competitive analysis, temporal analysis, customer analysis, etc.
          <br /><br />To optimize a campaign, it is required to measure the
          uplift that occurs as a result of the digital marketing efforts.
          Controlled strategies need to be implemented. These include the
          following steps:
        </p>
      </div>

      <div class="image-div">
        <img
          :src="
            require('../../../assets/images/solutions-footfall-mockup-1.png')
              .default
          "
          alt=""
        />
      </div>
    </div>

    <chat></chat>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Chat from "../../components/Chat.vue";
import SiteFooter from "../../components/SiteFooter.vue";

export default {
  name: "Footfall",
  components: { Chat, SiteFooter },
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
  }
};
</script>

<style lang="scss" scoped>
section {
  position: relative;

  background: url("../../../assets/images/solutions-footfall-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 11%;
    width: 22%;
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
  text-align: center;
  padding: 6rem 0;
  position: relative;

  p {
    max-width: 50%;
    margin: auto;
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    bottom: -2.5rem;
    /* left: 50%; */
    width: 2.5%;
    /* margin: 0 48.75%; */
    margin: auto;
    /* border: 1px solid red; */
  }
}

.section-3 {
  /* height: 100vh; */
  text-align: center !important;
  background-color: #ecf4f6;
  padding: 5rem 0;
  /* border: 1px solid red; */

  .text-content {
    /* border: 1px solid red; */
    text-align: center !important;
    max-width: 40%;
    margin: 2rem auto;
    /* padding: 2rem; */
  }

  .image-div {
    width: 50%;
    margin: 2rem auto;
    /* border: 1px solid black; */

    img {
      display: block;
      margin: 0 auto;
      width: 80%;
    }
  }
}
</style>