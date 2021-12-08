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
        <h1>CREATIVE STUDIO</h1>
        <p>
          MediaPal Creative Studio is a tool that creative agencies can use to
          make native, lead-generation, video and rich media ads.
          <br />
          It allows you to generate, preview and test creatives and set them for
          ad serving.
        </p>
      </div>
    </section>

    <show-case></show-case>

    <chat></chat>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Chat from "../../components/Chat.vue";
import ShowCase from "../../components/ShowCase.vue";
import SiteFooter from "../../components/SiteFooter.vue";

export default {
  name: "CreativeStudio",
  components: { Chat, SiteFooter, ShowCase },
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
  },
};
</script>

<style lang="scss" scoped>
section {
  /* border: 1px solid black; */
  position: relative;

  background: url("../../../assets/images/solutions-studio-bg.png")
    hsl(204, 26%, 96%);
  background-repeat: no-repeat;
  background-size: cover;
  /* background-blend-mode: multiply; */
  background-blend-mode: overlay;

  /* background:url(http://lorempixel.com/800/600/nature/2) rgba(255, 0, 150, 0.3); */

  /* &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: red;
    z-index: 10;
  } */

  .content {
    /* border: 1px solid red; */
    top: 40%;
    position: absolute;
    transform: translateY(-40%);
    left: 11%;
    width: 30%;

    h1 {
      font-size: 4rem;
      color: #257282;
      letter-spacing: 0.5rem;
      /* font-weight: 300 !important; */
    }

    p {
      /* font-weight: 100; */
      /* font-size: 1.3rem !important; */
      /* font-family: "brigadiersansregular" !important; */
      /* line-height: 1.6rem; */
      /* letter-spacing: 0.2rem; */
    }
  }
}
</style>