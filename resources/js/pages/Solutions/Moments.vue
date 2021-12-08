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

    <section class="section-1">
      <div class="content">
        <h1>MOMENTS</h1>
        <p>
          MediaPal Moments Marketing Platform uses offline experience,
          particularly in TV shows and sporting events to drive or trigger
          online interaction and deliver relevant messages in specific moments
          in real time. <br />
          Moments marketing connects people to a brand as if they were all
          sitting together in the same room.
        </p>
      </div>
      <div class="image-div">
        <img
          :src="require('../../../assets/images/solutions-moments.png').default"
          alt=""
        />
      </div>
    </section>

    <div class="section-2"></div>

    <div class="section-3">
      <div class="content">
        <p>
          MediaPal MMP Syncs Real-Time Events like TV Shows, TV Ads, Traffic
          Reports, Weather changes, Live Sports, Games to online audiences
          through the MediaPal programmatic platform. <br /><br />
          This means online users are able to link campaigns to events happening
          in real-time, taking advantage of off-line generated demand
          synchronized in real time with online campaigns to exponentially boost
          the results of advertisers’ campaigns.
        </p>

        <div class="equation">
          <span>Products + Moments = Product Relevance</span>
        </div>
      </div>
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <chat></chat>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Chat from "../../components/Chat.vue";
import SiteFooter from "../../components/SiteFooter.vue";

export default {
  name: "Moments",
  components: { Chat, SiteFooter },
  mounted() {
    this.triggerAnimations();
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
        x: -50,
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
.parent {
  position: relative;
}

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

@media (max-width: 768px) {
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
  background: url("../../../assets/images/solutions-moments-bg.png")
    hsl(203, 8%, 79%);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;

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
      /* color: #257282; */
      /* font-weight: 100; */
      /* font-size: 1.3rem !important; */
      /* font-family: "brigadiersansregular" !important; */
      /* line-height: 1.6rem; */
      /* letter-spacing: 0.2rem; */
    }
  }
  .image-div {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;

    img {
      display: block;
      width: 100%;
    }
  }
}

.section-2 {
  height: 60vh;
}

.section-3 {
  background-color: #ecf4f6;
  padding: 4rem 0;
  position: relative;

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 43%;
    margin: auto;

    /* border: 1px solid black; */

    .equation {
      /* border: 1px solid red; */
      span {
        font-size: 2.6rem !important;
        letter-spacing: 0.1rem;
        font-family: "brigadiersansregular" !important;
        color: #69a1ab;
      }
    }
  }
  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    bottom: -2.9rem;
    right: 17%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}
</style>