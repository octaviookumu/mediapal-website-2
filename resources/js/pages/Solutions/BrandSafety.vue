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
        <h1>BRAND SAFETY</h1>
        <p>
          MediaPal Brand Safety Tools offer an always-on brand protection,
          privacy and ad-fraud control. <br />Our data feeds gives brands the
          opportunity to buy and sell with confidence. <br /><br />MediaPal
          pre-bids on safe inventory hence identifies quality impressions and
          direct the budget toward high-value inventory to improve direct
          response and brand performance.
        </p>
      </div>
      <!-- <video src="require('../../../assets/images/Solutions-brand-safety.gif').default" width="300px"></video> -->
      <img
        class="safety-gif"
        :src="
          require('../../../assets/images/Solutions-brand-safety.gif').default
        "
        alt=""
      />
    </section>

    <div class="section-2">
      <img
        class="dotted-grid dotted-1"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <p>
        We dynamically score individual pages so you know exactly what type of
        content will appear with your advertising. We’ll work closely with you
        to set brand safety thresholds for each campaign, and save you from
        wasted impressions. <br />We can also create custom keyword lists for
        additional protection.
      </p>
    </div>

    <!-- <div class="section-3">
      <div class="detail">
        <div class="header">
          <h2>Viewability</h2>
        </div>

        <div class="section-content">
          <p>
            We combine industry-standard measurement methodologies with our
            unique pre-bid viewability technology, to offer you the industry’s
            best viewability coverage. We also make transactions based on
            viewability even easier with data taken from both the buy and sell
            sides.
          </p>
        </div>
      </div>

      <div class="detail">
        <div class="header">
          <h2>Ad Fraud</h2>
        </div>

        <div class="section-content">
          <p>
            We detect ad fraud to give advertisers a real picture of whether
            their target audiences were actually exposed to the ads. After all,
            non-human impressions shouldn’t count.
          </p>
        </div>
      </div>

      <img
        class="dotted-grid dotted-2"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div> -->

    <div class="section-4">
      <div class="cards-div">
        <div class="card card-1">
          <img
            :src="require('../../../assets/images/keyword-card-1.png').default"
            alt=""
          />
        </div>
        <div class="card card-2">
          <img
            :src="require('../../../assets/images/keyword-card-2.png').default"
            alt=""
          />
        </div>
        <div class="card card-3">
          <img
            :src="require('../../../assets/images/keyword-card-3.png').default"
            alt=""
          />
        </div>
        <div class="card card-4">
          <img
            :src="require('../../../assets/images/keyword-card-4.png').default"
            alt=""
          />
        </div>
      </div>


      <div class="text-detail text-detail-1">
        <div class="text-detail-container">
          <h2>Ad Fraud</h2>
          <p>
            We detect ad fraud to give advertisers a real picture of whether
            their target audiences were actually exposed to the ads. After all,
            non-human impressions shouldn’t count.
          </p>
        </div>
      </div>

      <div class="text-div">
        <div class="text-container">
          <h2>Keyword Exclusion</h2>
          <p>
            Advertisers can prevent Ads from showing to people who browse
            content related to negative or blacklisted words. With audience
            exclusions, you can set up targeting rules to avoid showing your Ads
            to people in unwanted contexts.
          </p>
        </div>
      </div>

      <div class="text-detail text-detail-2">
        <div class="text-detail-container">
          <h2>Viewability</h2>
          <p>
            We combine industry-standard measurement methodologies with our
            unique pre-bid viewability technology, to offer you the industry’s
            best viewability coverage. We also make transactions based on
            viewability even easier with data taken from both the buy and sell
            sides.
          </p>
        </div>
      </div>
    </div>

    <div class="section-5">
      <p>MediaPal 3rd Party Brand Safety Partners</p>
      <div class="logos">
        <div class="logo-div">
          <img
            :src="require('../../../assets/images/brand-safety-1.png').default"
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="require('../../../assets/images/brand-safety-2.png').default"
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="require('../../../assets/images/brand-safety-3.png').default"
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="require('../../../assets/images/brand-safety-4.png').default"
            alt=""
          />
        </div>
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
  name: "BrandSafety",
  components: { Chat, SiteFooter },
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
.parent{
  h2{
    font-size: 3rem;
  }
}

section {
  /* border: 1px solid black; */
  height: 100vh;
  position: relative;
  background-color: #d2d7d8;

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

  .safety-gif {
    width: 100%;
  }
}

.section-2 {
  /* border: 1px solid red; */
  text-align: center !important;
  padding: 5rem;
  background-color: #ecf4f6;
  position: relative;

  p {
    max-width: 52%;
    margin: auto;
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: -2.9rem;
    left: 17%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

.section-3 {
  /* border: 1px solid blue; */
  width: 80%;
  margin: 0 auto;
  position: relative;

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    top: 46%;
    left: 15%;
    width: 2.5rem;
    visibility: hidden;
    /* transform: translateY(-45%); */
    /* margin: 0 48.75%; */
    /* margin: auto; */
    /* border: 1px solid red; */
  }


  .detail {
  display: flex;
  /* border: 1px solid black; */
  align-items: center;
  justify-content: center;

  .section-content {
    flex-basis: 60%;
    padding: 4rem 4rem 4rem 2rem;

    p {
      /* border: 1px solid black; */
      border-left: 2px solid #69a1ab;
      padding-left: 1.5rem;
    }
  }

  .header {
    flex-basis: 40%;
    /* border: 1px solid red; */
    text-align: right !important;

    h2 {
      letter-spacing: 0.1rem;
    }
  }
}
}



.section-4 {
  height: 100vh;
  position: relative;
  display: flex;
  /* border: 1px solid red; */

  .text-detail-1{
    top: 3rem;
    /* border: 1px solid blue; */
    width: 40%;
    left: 38%;
  }

  .text-detail-2{
    bottom: 1rem;
    left: 54%;
    /* border: 1px solid red; */
    width: 38%;
  }

  .text-detail {
    position: absolute;
  right: 24%;
 

  .text-detail-container {
    flex-basis: 60%;
    padding: 2rem 0;

    p {
      /* border: 1px solid black; */
      /* border-left: 2px solid #69a1ab; */
      /* padding-left: 1.5rem; */
    }
  }

  .header {
    flex-basis: 40%;
    /* border: 1px solid red; */
    text-align: right !important;

    h2 {
      letter-spacing: 0.1rem;
    }
  }
}

  .cards-div {
    flex-basis: 50%;
    /* border: 1px solid blue; */
    position: relative;

    .card {
      position: absolute;
      /* border: 1px solid black; */
      width: 35%;
      box-shadow: 0 1px 1px 0 #fda041;
      border-radius: 10px;

      img {
        width: 100%;
        display: block;
        border-radius: 10px;
      }
    }

    .card-1 {
      top: 18%;
      left: 35%;
      transform: translate(-35%, -18%);
    }

    .card-2 {
      top: 45%;
      left: 85%;
      transform: translate(-85%, -45%);
    }

    .card-3 {
      top: 65%;
      left: 25%;
      transform: translate(-25%, -65%);
    }

    .card-4 {
      top: 85%;
      left: 70%;
      transform: translate(-70%, -85%);
    }
  }

  .text-div {
    flex-basis: 50%;
    /* border: 1px solid blue; */
    display: grid;
    place-items: center;

    .text-container {
      /* border: 1px solid red; */
      width: 70%;
      margin: auto auto auto 0;
    }
  }
}

.section-5 {
  background-color: #ecf4f6;
  padding: 3rem;
  text-align: center;

  p {
    font-weight: 550;
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;

    .logo-div {
      /* border: 1px solid red; */

      img {
        display: block;
        margin: auto;
        width: 80%;
      }
    }
  }
}
</style>