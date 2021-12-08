<template>
<!-- 3M+ Publishers at the bottom -->
  <div class="publishers">
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


    <publishers-landing-page></publishers-landing-page>
    <benefits></benefits>
    <network></network>
    <contact-us :email="email"></contact-us>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Benefits from "./Benefits.vue";
import Network from "./Network.vue";
import PublishersLandingPage from "./PublishersLandingPage.vue";
import ContactUs from "../../components/ContactUs.vue"
import SiteFooter from "../../components/SiteFooter.vue";
// import "../../../css/app.css"

export default {
  components: { PublishersLandingPage, Benefits, Network, ContactUs, SiteFooter },
  name: "publishers",
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
  data(){
    return{
      email: 'publishers@mediapal.net'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>