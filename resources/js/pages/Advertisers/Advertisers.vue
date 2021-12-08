<template>
  <div class="advertisers">
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
          <p>MediaPal Presence</p>
          <p>MediaPal runs ads in various markets across the world</p>
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
    <advertisers-landing-page></advertisers-landing-page>
    <why-advertise></why-advertise>
    <serve-you></serve-you>
    <buy-on-platform></buy-on-platform>
    <trusted-by></trusted-by>
    <contact-us :email="email"></contact-us>
    <site-footer></site-footer>
  </div>
</template>

<script>
import BuyOnPlatform from "./BuyOnPlatform.vue";
import ServeYou from "./ServeYou.vue";
import WhyAdvertise from "./WhyAdvertise.vue";
import TrustedBy from "./TrustedBy.vue";
import AdvertisersLandingPage from "./AdvertisersLandingPage.vue";
import ContactUs from "../../components/ContactUs.vue";
import SiteFooter from "../../components/SiteFooter.vue";
export default {
  components: {
    AdvertisersLandingPage,
    WhyAdvertise,
    ServeYou,
    BuyOnPlatform,
    TrustedBy,
    ContactUs,
    SiteFooter,
  },
  name: "advertisers",
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
  data() {
    return {
      email: "advertisers@mediapal.net",
    };
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

      p {
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
          font-family: "Bebas Neue", cursive;
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
</style>